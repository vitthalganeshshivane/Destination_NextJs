"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-md border-2 border-white rounded-2xl p-8 shadow-8 bg-gray-900">
        <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>
        <form className="space-y-6">
          <div>
            <label className="block mt-3 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full border-b border-white py-2 px-1 bg-gray-900 text-white outline-none placeholder-gray-400"
              value={email}
              onChange={(e: React.ChangeEvent) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block mt-3 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full border-b border-white py-2 px-1 mb-4 bg-gray-900 text-white outline-none placeholder-gray-400"
              value={password}
              onChange={(e: React.ChangeEvent) => setPassword(e.target.value)}
            />
          </div>

          <p className="text-sm text-center mt-1 mb-4">
            Want to create an account ?{" "}
            <span
              className="text-blue-400 hover:underline cursor-pointer"
              onClick={() => router.push("/register")}
            >
              Register
            </span>
          </p>

          <button className="w-full py-2 px-4 mb-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-300 transition-colors">
            Login
          </button>
        </form>

        <div className="mb-3 flex gap-3 items-center justify-center">
          <hr className="flex-grow border-gray-500" />
          <span>OR</span>
          <hr className="flex-grow border-gray-500" />
        </div>

        <button className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-400 rounded-lg bg-white text-black hover:bg-gray-300 transition-colors">
          <FcGoogle />
          <span>Sign Up With Google</span>
        </button>
      </div>
    </div>
  );
}

export default Login;
