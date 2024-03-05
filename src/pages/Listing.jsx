import React from "react";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";

const Listing = () => {
  return (
    <div className="bg-base-200 my-12">
      <div className="align-element">
        <SearchBox></SearchBox>
        <CardList></CardList>
      </div>
    </div>
  );
};

export default Listing;
