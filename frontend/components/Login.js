import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

function Login() {
  return (
    <div className="flex flex-col items-center mx-auto">
      <Image
        src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
        height={240}
        width={240}
        
      />
      <a
        onClick={signIn}
        className="px-20 py-4 text-2xl cursor-pointer -mt-6 bg-blue-500 rounded-md text-white"
      >
        Login
      </a>
    </div>
  );
}

export default Login;
