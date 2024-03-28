import Link from "next/link";
import MealsItem from "@/components/MealsItem/MealsItem";

export default  function Meals() {

  return (
    <main className="py-16 px-12 max-w-laptop m-margAuto">
      <div className=" p-10 h-80">
        <h1 className="text-slate text-6xl font-bold mb-4">
          Delicious meals, created{" "}
          <span className="text-orange-500">by you</span>
        </h1>
        <p className="text-slate text-xl mb-12">
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>

        <Link
          href="/meals/share"
          className="bg-orange-500 p-4 w-44 text-slate text-2xl rounded-2xl font-bold text-center hover:bg-orange-600 transition-colors"
        >
          Share Your Favorite Recipe
        </Link>
      </div>
      <MealsItem />
    </main>
  );
}
