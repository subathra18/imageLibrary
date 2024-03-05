import React from "react";

const Card = () => {
  return (
    <div className="card w-full shadow-xl hover:scale-110 hover:shadow-2xl  transition duration-500">
      <img
        src="https://images.pexels.com/photos/3679601/pexels-photo-3679601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="title"
        className="rounded-xl h-64 md:h-48 w-full object-cover"
      />
      <div className="card-body items-center text-center">
        <h2 className="card-title capitalize tracking-wider">title</h2>
        <span>dollarsAmount</span>
      </div>
    </div>
  );
};

export default Card;
