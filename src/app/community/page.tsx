import Image from "next/image";

import mealIcon from "../../../assets/icons/meal.png";
import communityIcon from "../../../assets/icons/community.png";
import eventsIcon from "../../../assets/icons/events.png";

export default function Community() {
  return (
    <main className="py-20 px-12 max-w-laptop m-margAuto flex flex-col justify-center items-center text-slate">
      <h1 className="text-6xl font-bold mb-8">
        One shared passion: <span className="text-orange-500">Food</span>
      </h1>
      <p className="text-2xl mb-10">
        Join our community and share your favorite recipes!
      </p>
      <h2 className=" text-3xl font-bold">Community Perks</h2>

      <ul className="flex flex-col justify-center items-center gap-6 text-3xl font-bold pb-20">
        <li className="flex flex-col justify-center items-center">
          <Image
            src={mealIcon}
            alt="A delicious meal"
            className="w-32 h-32 mb-4"
          />
          <p>Share & discover recipes</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <Image
            src={communityIcon}
            alt="A crowd of people, cooking"
            className="w-32 h-32"
          />
          <p>Find new friends & like-minded people</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <Image
            src={eventsIcon}
            alt="A crowd of people at a cooking event"
            className="w-32 h-32"
          />
          <p>Participate in exclusive events</p>
        </li>
      </ul>
    </main>
  );
}
