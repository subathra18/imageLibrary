import React from "react";
import Card from "./Card";

const CardList = ({ list }) => {
  return (
    <div className="pt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {list &&
        list.map((item, index) => {
          return <Card key={index} item={item}></Card>;
        })}
    </div>
  );
};

export default CardList;
