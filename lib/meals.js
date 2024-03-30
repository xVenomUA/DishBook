import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

import fs from "node:fs";

const db = new sql("meals.db");

export async function getMeals() {
  return db.prepare("SELECT * FROM meals").all();
}

export  function getMealBySlug(slug) {
  return db.prepare(`SELECT * FROM meals WHERE slug = ?`).get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${meal.image_path}`);
  const buffer = await meal.image.arrayBuffer();

  stream.write(Buffer.from(buffer), (error) => {
    if (error) {
      throw new Error("Saving image failed.");
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `INSERT INTO meals (title, summary, instructions, image, creator, creator_email, slug) VALUES (@title, @summary, @instructions, @image, @creator, @creator_email, @slug)`
  ).run(meal);
}
