"use client";
import { useId } from "react";

export default function FormSubmit() {
  const nameID = useId();
  const emailID = useId();
  const titleID = useId();
  const shortID = useId();
    const instructionsID = useId();
    
  return (
    <>
      <form action="" className="flex flex-col text-slate text-xl px-12">
        <div className="flex gap-10">
          <div className="mb-8">
            <label htmlFor={nameID} className="flex flex-col w-32 mb-2 ">
              Your name
            </label>
            <input
              type="text"
              id={nameID}
              className="bg-gray p-2 rounded-lg border-2 border-neutral-600 w-96"
            />
          </div>
          <div>
            <label htmlFor={emailID} className="w-32 flex flex-col mb-2">
              Your email
            </label>
            <input
              type="text"
              id={emailID}
              className="bg-gray p-2 rounded-lg border-2 border-neutral-600 w-96"
            />
          </div>
        </div>
        <label htmlFor={titleID} className="mb-2">
          Title
        </label>
        <input
          type="text"
          id={titleID}
          className="bg-gray p-2 rounded-lg border-2 border-neutral-600 w-w808 mb-3"
        />
        <label htmlFor={shortID} className="mb-2">
          Short Summary
        </label>
        <input
          type="text"
          id={shortID}
          className="bg-gray p-2 rounded-lg border-2 border-neutral-600 w-w808 mb-3"
        />
        <label htmlFor={instructionsID} className="mb-2">
          Instructions
        </label>
        <textarea
          rows={7}
          id={instructionsID}
          className="bg-gray p-2 rounded-lg border-2 border-neutral-600 w-w808 mb-3"
        />
      </form>
    </>
  );
}
