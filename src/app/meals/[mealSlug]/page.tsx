import ItemsDetails from "@/components/ItemsDetails/ItemsDetails";
import { getMealBySlug } from "../../../../lib/meals";

export default function MealsSlug({
  params,
}: {
  params: { mealSlug: string };
}) {
  const { mealSlug } = params;
  const meal = getMealBySlug(mealSlug);

  return (
    <main className="py-8 px-12 max-w-laptop m-margAuto">
      <ItemsDetails dataItem={meal} />
    </main>
  );
}
