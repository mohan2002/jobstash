"use client";

import GoogleButton from "react-google-button";
import { useSession, signIn, signOut } from "next-auth/react";

function Login() {
  return (
    <div>
      <GoogleButton
        className="mx-auto mt-15"
        onClick={() => {
          signIn("google");
        }}
      />
      <button
        onClick={() => {
          signOut();
        }}
      >
        Signout
      </button>
    </div>
  );
}

export default Login;
