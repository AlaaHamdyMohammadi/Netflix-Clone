import React from "react";

export default function Input() {
  return (
    <div className="relative">
      <input
        id="email"
        className="rounded-md px-6 py-6 pb-1 w-full  text-md bg-neutral-700 text-white block focus:outline-none focus:ring-0 appearance-none peer"
        type="email"
        placeholder=" "
      />
      <label
        htmlFor="email"
        className="absolute text-zinc-400 text-md transform duration-150 -translate-y-3 scale-75 top-4 left-6 z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 origin-[0]"
      >
        Email
      </label>
    </div>
  );
}
