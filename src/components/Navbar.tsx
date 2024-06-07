import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="font-semibol flex w-full items-center justify-between border-b p-4 text-xl">
      Navbar
      <Link href="/sign-in"> Sign in</Link>
    </nav>
  );
}

export default Navbar;
