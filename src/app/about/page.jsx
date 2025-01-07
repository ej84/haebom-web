import React from "react";
import Navbar from "../components/Navbar";

const page = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center font-[family-name:var(--font-geist-sans)]">
        <div>
          <h1 className="text-lg md:text-3xl">해봄에 대하여</h1>
        </div>
      </main>
    </>
  );
};

export default page;
