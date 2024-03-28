export default function MealsSlug({
  params,
}: {
  params: { mealSlug: string };
}) {
  return (
    <main className="py-8 px-12 max-w-laptop m-margAuto">
      Something {params.mealSlug}
    </main>
  );
}
