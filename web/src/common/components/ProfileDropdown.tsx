"use-client";
import { signOut, useSession } from "next-auth/react";
import React, { useState } from "react";
import Profile from "../../../public/profile.png";

function ProfileDropdown() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        id="dropdownUserAvatarButton"
        data-dropdown-toggle="dropdownAvatar"
        className="flex mx-3 text-sm bg-gray-800 h-12 w-12 rounded-full md:mr-0 focus:ring-2 focus:ring-gray-300  dark:focus:ring-gray-600"
        type="button"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <img className="h-full w-full rounded-full" src={session?.user?.image || Profile} alt="user photo" />
      </button>

      {open && (
        <div id="dropdownAvatar" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute right-2 top-20">
          <div className="px-4 py-3 text-md font-medium text-gray-900 dark:text-white">
            <div>{session?.user?.name}</div>
            <div className=" text-xs font-normal truncate">{session?.user?.email}</div>
          </div>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Profile
              </a>
            </li>
          </ul>
          <div className="py-2">
            <a
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              onClick={() => {
                signOut();
              }}
            >
              Sign out
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileDropdown;
