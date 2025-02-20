"use client";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react";

const Page = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        Sign in as {session.user.email}
        <br />
        <button onClick={() => signOut()}>Sign Out</button>
      </>
    );
  }
  return (
    <div className="min-h-screen w-screen flex justify-center items-center">
      <div className="container w-2/3 max-w-[600px] bg-white text-[#171717] mx-auto py-12 px-6 flex flex-col items-center space-y-8 rounded-2xl shadow-lg shadow-white md:w-1/2 md:py-16">
        <h1 className="text-2xl font-bold">Login</h1>
        <div className="w-full px-4 space-y-6 md:px-8 ">
          <button
            onClick={() => signIn("google")}
            className="w-full flex justify-center items-center space-x-2 py-2 ring-1 ring-[#171717] rounded-full transition-all cursor-pointer hover:bg-[#171717] hover:text-white active:scale-105"
          >
            <FaGoogle />
            <h2>Sign in with Google</h2>
          </button>
          <button className="w-full flex justify-center items-center space-x-2 py-2 ring-1 ring-[#171717] rounded-full transition-all cursor-pointer hover:bg-[#171717] hover:text-white active:scale-105">
            <FaMicrosoft />
            <h2>Sign in with Mircrosoft</h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
