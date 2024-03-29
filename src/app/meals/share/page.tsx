import FormSubmit from "@/components/FormSubmit/FormSubmit";

export default function Share() {
  return (
    <main className="py-16 px-12 max-w-laptop m-margAuto">
      <h1 className="text-slate font-bold text-6xl mb-10 px-10">
        Share your <span className="text-orange-500">favorite meal</span>
      </h1>
      <p className="text-slate text-2xl mb-16 px-10">
        Or any other meal you feel needs sharing!
      </p>
      <FormSubmit />
    </main>
  );
}
