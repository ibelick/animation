"use client";
import { animations } from "@/data/animations";

const ListAnimation = () => {
  return (
    <div className="grid grid-cols-1 gap-6 pb-6 md:grid-cols-2 lg:grid-cols-4">
      {animations.map((animation, index) => {
        const className = `w-32 h-32 bg-red-200 ${animation.class}`;

        return (
          <div key={index} className="mb-4">
            <h3>{animation.name}</h3>
            <p>{animation.description}</p>
            <div className={className}></div>
          </div>
        );
      })}
    </div>
  );
};

export default ListAnimation;
