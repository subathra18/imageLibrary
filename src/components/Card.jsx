import React from "react";
import { CiHeart } from "react-icons/ci";
import { truncate } from "../utils/utils";

const Card = ({ item }) => {
  const { likes, alt_description } = item;
  const image = item.urls.small;
  return (
    <div className="card w-full shadow-xl hover:scale-110 hover:shadow-2xl  transition duration-500">
      <img
        src={image}
        alt="title"
        className="rounded-xl h-64 md:h-48 w-full object-cover"
      />

      <div className="card-body items-center text-center">
        <h2 className="card-title capitalize tracking-wider">
          {truncate(alt_description, 50) || "image"}
        </h2>
        <div className="flex gap-2">
          <CiHeart className="h-4 w-4 mt-1"></CiHeart>
          <span>{likes}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
