import Link from "next/link";

export default function BtnUseRouter() {
  //тут ти повинен повернути лінк який буде переходити на сторінку минулу сторінку

  return (
    <>
      <Link
        href="/meals"
        className="bg-orange-500 p-2 w-40 text-slate text-2xl rounded-2xl font-bold text-center hover:bg-orange-600 transition-colors"
      >
        Back
      </Link>
    </>
  );
}
