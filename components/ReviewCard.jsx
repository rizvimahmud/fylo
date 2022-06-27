import React from "react";
import Image from "next/image";

export const ReviewCard = (props) => {
  const { name, review, designation, avatar } = props.review;
  return (
    <div className="p-6 md:p-8 bg-primary-blue-1 rounded-md shadow">
      <p className="text-gray-200 leading-6">{review}</p>
      <div className="flex flex-row items-center mt-6">
        <Image
          src={avatar}
          alt={name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex flex-col gap-1 justify-start ml-3">
          <span className="text-sm font-semibold text-gray-300">{name}</span>
          <span className="text-xs text-gray-400">{designation}</span>
        </div>
      </div>
    </div>
  );
};
