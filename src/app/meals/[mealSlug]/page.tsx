import ItemsDetails from "@/components/ItemsDetails/ItemsDetails";
import { getMealBySlug } from "../../../../lib/meals";
import BtnUseRouter from "@/components/BtnUseRouter/BtnUseRouter";
import { notFound } from "next/navigation";

export default  function MealsSlug({
  params,
}: {
  params: { mealSlug: string };
}) {
  const { mealSlug } = params;
  const meal = getMealBySlug(mealSlug);

  if (!meal) {
    notFound();
  }
  return (
    <main className="py-8 px-12 max-w-laptop m-margAuto">
      <ItemsDetails dataItem={meal} />
      <BtnUseRouter />
    </main>
  );
}
