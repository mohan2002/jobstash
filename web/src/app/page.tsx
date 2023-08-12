"use client";

import Login from "@/common/Login";
import { useSession } from "next-auth/react";
import Loading from "@/common/components/Loading";
import Home from "@/common/Home";

function Page() {
  const { data: session, status } = useSession();

  const loading = status === "loading";

  if (loading) {
    return <Loading />;
  }

  return <main>{session ? <Home /> : <Login />}</main>;
}

export default Page;
