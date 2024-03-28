import Image from "next/image";
import { getMeals } from "../../../lib/meals";
import Link from "next/link";
export default async function MealsItem() {
  const meals = await getMeals();
  type Meal = {
    title: string;
    image: string;
    summary: string;
    creator: string;
    slug: string;
  };
  return (
    <ul className="flex gap-16 justify-center items-center flex-wrap">
      {meals.map((meal: Meal) => (
        <li
          key={meal.slug}
          className="bg-brown max-w-96  text-slate rounded-xl h-h400 box-border shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
        >
          <Image
            src={meal.image}
            alt={meal.title}
            height={240}
            width={384}
            className="w-full h-60 object-cover block rounded-t-xl"
          />
          <div className="p-4 text-slate h-56">
            <h1 className="text-2xl font-bold mb-1">{meal.title}</h1>
            <p className="text-xs italic text-yellow-700 mb-1">
              by {meal.creator}
            </p>
            <p className="mb-10">{meal.summary}</p>
            <div className="flex justify-end">
              <Link
                href={`/meals/${meal.slug}`}
                className="w-36 p-2 bg-orange-600 rounded-lg flex justify-center items-center text-lg"
              >
                View Details
              </Link>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
