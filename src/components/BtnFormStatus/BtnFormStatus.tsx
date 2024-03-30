import { useFormStatus } from "react-dom";

export default function BtnFormStatus() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="bg-orange-500 text-slate rounded-md w-60 h-14 font-bold hover:bg-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 duration-500"
      disabled={pending}
    >
      {pending ? "Loading..." : "Submit"}
    </button>
  );
}
