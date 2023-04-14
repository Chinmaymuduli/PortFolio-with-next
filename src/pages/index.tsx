import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div className="container">
      <div className="bg-[#F2EFE7] h-16 flex w-full  items-center ">
        <div className="flex items-center justify-between w-full px-24">
          <div className="w-fit">
            <img src="./chinmayLogo.png" alt="img" className="h-10 w-16" />
          </div>
          <div className="space-x-11">
            <Link href={"./about"} className="font-bold">
              About Me
            </Link>
            <Link href={"./Experience"} className="font-bold">
              Experience
            </Link>
            <Link href={"./contact"} className="font-bold">
              Contact Me
            </Link>
            <Link href={"./resume"} className="font-bold">
              Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
