"use client";
import { useId } from "react";
import ImagePicker from "../ImagePicker/ImagePicker";

import { shareMeal } from "../../../lib/action";
import { useFormState } from "react-dom";
import BtnFormStatus from "../BtnFormStatus/BtnFormStatus";

export default function FormSubmit() {
  const [state, formAction] = useFormState(shareMeal, { message: "" });
  return (
    <>
      <form
        className="flex flex-col text-slate text-xl px-12"
        action={formAction}
      >
        <div className="flex gap-10">
          <div className="mb-8">
            <label htmlFor="name" className="flex flex-col w-32 mb-2 ">
              Your name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-gray p-2 rounded-lg border-2 border-neutral-600 w-96 "
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="w-32 flex flex-col mb-2">
              Your email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="bg-gray p-2 rounded-lg border-2 border-neutral-600 w-96"
              placeholder="Your email"
              required
            />
          </div>
        </div>
        <label htmlFor="title" className="mb-2">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="bg-gray p-2 rounded-lg border-2 border-neutral-600 w-w808 mb-3"
          placeholder="Title"
          required
        />
        <label htmlFor="summary" className="mb-2">
          Short Summary
        </label>
        <input
          type="text"
          id="summary"
          name="summary"
          className="bg-gray p-2 rounded-lg border-2 border-neutral-600 w-w808 mb-3"
          placeholder="Short Summary"
          required
        />
        <label htmlFor="instructions" className="mb-2">
          Instructions
        </label>
        <textarea
          rows={7}
          id="instructions"
          name="instructions"
          className="bg-gray p-2 rounded-lg border-2 border-neutral-600 w-w808 mb-3"
          placeholder="Type your instructions here"
          required
        />
        <ImagePicker name="image" />
        <div className="flex justify-end w-w808">
          <BtnFormStatus />
        </div>
      </form>
    </>
  );
}
