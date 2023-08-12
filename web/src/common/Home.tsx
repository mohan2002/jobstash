"use client";
import React, { useEffect, useState } from "react";
import Greeting from "./components/Greeting";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";

function Home() {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <Greeting />
    </>
  );
}

export default Home;
