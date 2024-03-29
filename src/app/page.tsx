import ImageSlideShow from "@/components/ImageSlideShow/ImageSlideShow";
import InfoComp from "@/components/InfoComp/InfoComp";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  
  return (
    <main className="py-8 px-12 max-w-laptop m-margAuto">
      <div className="flex gap-24 mb-10">
        <div className="w-w40 h-h25">
          <ImageSlideShow />
        </div>
        <div className="">
          <h1 className="text-4xl font-bold tracking-wide uppercase text-orange-400 my-10 ">
            NextLevel Food for NextLevel Foodies
          </h1>
          <p className="text-1xl font-bold tracking-wide uppercase text-white">
            Taste & share food from all over the world.
          </p>
          <div className="flex mt-12 gap-20">
            <Link
              href="/community"
              className="text-orange-400 text-xl py-4 px-2 hover:text-orange-500 duration-500"
            >
              Join the Community
            </Link>
            <Link
              href="/meals"
              className="py-4 px-2 w-52 text-white bg-orange-400 text-xl rounded-3xl hover:bg-orange-500 duration-500 flex justify-center items-center font-bold tracking-wide uppercase"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </div>
      <InfoComp />
    </main>
  );
}
