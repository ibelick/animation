"use client";
import { useState } from "react";
import { animations } from "@/data/animations";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";

type Type = "div" | "text";

const ListAnimation = () => {
  const [type, setType] = useState<Type>("div");

  return (
    <div>
      {/* <div>
        <div onClick={() => setType("div")}>div</div>
        <div onClick={() => setType("text")}>text</div>
      </div> */}
      <div className="grid grid-cols-1 gap-12 pb-6 md:grid-cols-2 lg:grid-cols-4">
        {animations.map((animation, index) => {
          return (
            <div className="flex flex-col" key={index}>
              <div className="flex flex-col items-center overflow-hidden rounded-xl border border-neutral-200 p-4">
                <animation.component type={type} />
              </div>
              <Link
                href={`/${animation.slug}`}
                className="flex items-center justify-between"
              >
                <span className="font-base mt-2 inline-flex justify-center text-neutral-800">
                  {animation.name}
                </span>
                <ArrowRightIcon className="h-4 w-4 text-neutral-800 transition-colors hover:text-neutral-600" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListAnimation;
