"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";

export default function ImagePicker({ name }: { name: string }) {
  const [pickImage, setPickImage] = useState<string | null>(null);
  const imageInput = useRef<HTMLInputElement>(null);

  function handlePickImage(): void {
    imageInput.current?.click();
  }

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPickImage(reader.result as string | null);
      };
      reader.readAsDataURL(file);
    }
  }
  return (
    <div className="flex flex-col text-slate text-xl mb-6 w-w808">
      <label htmlFor="file" className="mb-2">
        Your Image
      </label>
      <div className="flex gap-10">
        <div className="w-40 h-40 flex items-center justify-center border-2 rounded-xl">
          {pickImage ? (
            <Image
              src={pickImage}
              width={160}
              height={160}
              alt="your pick photo"
              className="w-full h-full rounded-lg object-cover"
            />
          ) : (
            <p className="text-lg">No image picked</p>
          )}
        </div>
        <input
          type="file"
          name={name}
          id="file"
          accept="image/jpeg, image/png"
          className="hidden"
          ref={imageInput}
          onChange={handleFileChange}
        />

        <button
          type="button"
          onClick={handlePickImage}
          className="flex justify-center items-center bg-zinc-400 text-slate 
          rounded-md px-4 h-10 hover:bg-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 duration-500"
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
