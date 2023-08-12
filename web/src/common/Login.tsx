"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Logo from "../../public/Logo.png";
import GoogleSignin from "./components/GoogleSignin";

function Login() {
  function begin(args: any) {
    args.step = 20;
  }
  const { status } = useSession();

  return (
    <div className="flex h-screen flex-col items-center justify-center  mt-[-40px]">
      <Image src={Logo} alt="Logo" width={340} height={200} />
      <GoogleSignin />
    </div>
  );
}

export default Login;
