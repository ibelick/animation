"use client";
import { useState } from "react";
import { animations } from "@/data/animations";
import Link from "next/link";

type Type = "div" | "text";

const ListAnimation = () => {
  const [type, setType] = useState<Type>("div");

  return (
    <div>
      <div>
        <div onClick={() => setType("div")}>div</div>
        <div onClick={() => setType("text")}>text</div>
      </div>
      <div className="grid grid-cols-1 gap-6 pb-6 md:grid-cols-2 lg:grid-cols-4">
        {animations.map((animation, index) => {
          return (
            <div className="flex flex-col" key={index}>
              <div className="flex items-center flex-col border border-neutral-300 rounded-xl p-4 overflow-hidden">
                <animation.component type={type} />
              </div>
              <Link href={`/${animation.slug}`}>
                <span className="inline-flex mt-2 justify-center font-base">
                  {animation.name}
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListAnimation;
