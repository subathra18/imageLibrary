import React from "react";
import Card from "./Card";

const CardList = () => {
  return (
    <div className="pt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>

      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  );
};

export default CardList;
