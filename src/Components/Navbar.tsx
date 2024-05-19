"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
const Navbar = () => {
  const [state, setState] = useState<number>(1);
  const update = () => {
    setState(state + 1);
    console.log(`${state}/3`);
  };

  useEffect(() => {
    if (state === 4) {
      console.log("Bingo, key has been STORED somewhere");
      localStorage.setItem("key", "MustInsertSomewhere?");
    } else if (state ===10){
      console.log("Stop.")
    }
  }, [state]);

  return (
    <nav className="bg-primary-main sticky z-50 top-6 inset-x-0 mx-auto w-80 rounded-xl opacity-75">
      <div className="ml-auto text-white flex items-center h-16 justify-center space-x-8">
        <Link href="/#about" onClick={update} className="hover:text-gray-500">
          About
        </Link>
        <Link href="/#projects" className="hover:text-gray-500">
          Projects
        </Link>
        <Link href="/#skills" className="hover:text-gray-500">
          Skills
        </Link>
        <Link href="/#contact" className="hover:text-gray-500">
          Contact
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
