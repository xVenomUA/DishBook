import Image from "next/image";
import { getMealBySlug } from "../../../lib/meals";
type Meal = {
  title: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
};
export default function ItemsDetails({ dataItem }: { dataItem: Meal }) {
  dataItem.instructions = dataItem.instructions.replace(/\n/g, "<br />");
  return (
    <>
      <div className="flex gap-12 justify-center items-center">
        <Image
          src={dataItem.image}
          alt={dataItem.title}
          width={360}
          height={240}
          className="w-96 h-60 object-cover box-border rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
        ></Image>
        <div className=" w-4/6">
          <h1 className="text-5xl text-slate font-bold mb-10">
            {dataItem.title}
          </h1>
          <p className=" italic text-stone-500 text-xl mb-3">
            {" "}
            by <span className="text-orange-500">{dataItem.creator}</span>
          </p>
          <p className="text-slate text-2xl ">{dataItem.summary}</p>
        </div>
      </div>
      <p
        dangerouslySetInnerHTML={{
          __html: dataItem.instructions,
        }}
        className="bg-stone-500 rounded-3xl py-7 px-5 w-3/4 block mx-auto text-lg mt-14"
      ></p>
    </>
  );
}
