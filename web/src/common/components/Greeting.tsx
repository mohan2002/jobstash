"use-client";
import { useSession } from "next-auth/react";
import React from "react";

function Greeting() {
  const { data: session } = useSession();
  return (
    <div className="flex flex-row justify-between p-4 items-center">
      <div className="flex flex-col gap-2 px-2 py-4">
        <h1 className="font-medium text-3xl">👋🏻 Hi {session?.user?.name}</h1>
        <p className="text-[12px] font-light">Yours Personalised Job Application View</p>
      </div>

      <div>
        <button type="button" className="text-white bg-[#2D2C45]hover:bg-blue-800 focus:ring-1 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-[#2D2C45] dark:hover:opacity-90 gap-1">
          Add Job
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Greeting;
