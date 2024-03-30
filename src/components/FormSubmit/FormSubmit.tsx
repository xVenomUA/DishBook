"use client";
import { useId } from "react";
import ImagePicker from "../ImagePicker/ImagePicker";

import { shareMeal } from "../../../lib/action";
import { log } from "console";
import { useFormState } from "react-dom";
interface FormSubmitProps {
  name: string;
  email: string;
  title: string;
  summary: string;
  instructions: string;
  image: string;
}
export default function FormSubmit() {
  const nameID = useId();
  const emailID = useId();
  const titleID = useId();
  const shortID = useId();
  const instructionsID = useId();
  
  return (
    <>
      <form className="flex flex-col text-slate text-xl px-12" > 
        <div className="flex gap-10">
          <div className="mb-8">
            <label htmlFor={nameID} className="flex flex-col w-32 mb-2 ">
              Your name
            </label>
            <input
              type="text"
              id={nameID}
              name="name"
              className="bg-gray p-2 rounded-lg border-2 border-neutral-600 w-96 "
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label htmlFor={emailID} className="w-32 flex flex-col mb-2">
              Your email
            </label>
            <input
              type="text"
              name="email"
              id={emailID}
              className="bg-gray p-2 rounded-lg border-2 border-neutral-600 w-96"
              placeholder="Your email"
              required
            />
          </div>
        </div>
        <label htmlFor={titleID} className="mb-2">
          Title
        </label>
        <input
          type="text"
          name="title"
          id={titleID}
          className="bg-gray p-2 rounded-lg border-2 border-neutral-600 w-w808 mb-3"
          placeholder="Title"
          required
        />
        <label htmlFor={shortID} className="mb-2">
          Short Summary
        </label>
        <input
          type="text"
          id={shortID}
          name="summary"
          className="bg-gray p-2 rounded-lg border-2 border-neutral-600 w-w808 mb-3"
          placeholder="Short Summary"
          required
        />
        <label htmlFor={instructionsID} className="mb-2">
          Instructions
        </label>
        <textarea
          rows={7}
          id={instructionsID}
          name="instructions"
          className="bg-gray p-2 rounded-lg border-2 border-neutral-600 w-w808 mb-3"
          placeholder="Type your instructions here"
          required
        />
        <ImagePicker name="image" />
        <div className="flex justify-end w-w808">
          <button
            type="submit"
            className="bg-orange-500 text-slate rounded-md w-60 h-14 font-bold hover:bg-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 duration-500"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
