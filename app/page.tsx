import { HomeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../components/ui/Button";

const page = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl md:text-4xl">Welcome.</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-4 py-6"></div>
      {/* Feed */}

      {/* Subbredit info */}
      <div className="overflow-hidden h-fit rounded-lg border border-gray-200 order-first md:order-last">
        <div className="bg-pink-100 px-6 py-4">
          <p className="font-semibold py-3 flex items-center gap-1.5">
            <HomeIcon className="w-4 h-4" />
            Home page
          </p>
        </div>
        <div className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
          <div className="flex justify-between gap-x-4 py-3">
            <p className="text-gray-500">Friends hood</p>
          </div>
          <Link
            href="/m/create"
            className={buttonVariants({ className: "w-full mt-4 mb-6" })}
          >
            Create community
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
