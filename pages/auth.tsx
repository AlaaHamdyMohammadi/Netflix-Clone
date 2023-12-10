/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import { useState, useCallback } from "react";
import Image from "next/image";
import Input from "@/components/Input";

export default function auth() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [varient, setVarient] = useState('login');

  const toggleVarient = useCallback(() => {
    setVarient((currentVarient) => currentVarient === 'login' ? 'register' : 'login');
  }, []);
  

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-70">
        <nav className="px-12 py-5">
          <Image src="/images/logo.png" width={100} height={48} alt="Logo" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {varient === "login" ? "Sign in" : "Register"}
            </h2>
            <div className="flex flex-col gap-3">
              {varient === "register" && (
                <Input
                  id="username"
                  label="Username"
                  type="text"
                  value={username}
                  onChange={(e: any) => setUsername(e.target.value)}
                />
              )}
              <Input
                id="email"
                label="Email"
                type="email"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
              />
              <Input
                id="password"
                label="Password"
                type="password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
              />
            </div>
            <button className="bg-red-600 hover:bg-red-700 py-3 px-3 text-white rounded-md w-full mt-10 transition">
              {varient === "login" ? "Login" : "Sign up"}
            </button>
            <p className="text-neutral-500 mt-10">
              {varient === "login"
                ? "First time using Netflix?"
                : "Already have an account"}
              <span
                onClick={toggleVarient}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {varient === "login" ? "Create an account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
