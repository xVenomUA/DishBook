import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = new sql("meals.db");

export async function getMeals() {
  return db.prepare("SELECT * FROM meals").all();
}

export function getMealBySlug(slug) {
  return db.prepare(`SELECT * FROM meals WHERE slug = ?`).get(slug);
}

export async function saveMeal(meal) {
   meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop(); 
}
