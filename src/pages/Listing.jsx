import React from "react";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import Sort from "../components/Sort";
import Pagination from "../components/Pagination";
import { useFetch } from "../hooks/useFetch";
import { LIST_PHOTOS } from "../utils/urls";
import { DEFAULT_SEARCH_TERM, DEFAULT_PAGES } from "../utils/constants";
import { sortBy } from "../utils/utils";
import { TiArrowSortedUp } from "react-icons/ti";

const Listing = () => {
  const [input, setInput] = React.useState(DEFAULT_SEARCH_TERM);
  const [sortByTerm, setSortByTerm] = React.useState();
  const [page, setPage] = React.useState(1);
  const sortOptions = [{ Likes: "likes" }, { Latest: "updated_at" }];
  const url = `${LIST_PHOTOS}&query=${input}&per_page=9&page=${page}`;
  const results = useFetch(url);
  const imageList = results ? results.data.results : [];
  const totalPages = results ? results.data.total_pages : DEFAULT_PAGES;
  const sortedList =
    sortByTerm == undefined ? imageList : sortBy(imageList, sortByTerm, "desc");

  return (
    <div className="bg-base-200 my-12 flex">
      <div className="align-element">
        <div className="navbar  py-10">
          <div className="navbar-start"></div>
          <div className="navbar-center">
            <SearchBox inputHandler={setInput} value={input}></SearchBox>
          </div>
          <div className="navbar-end">
            <Sort sortHandler={setSortByTerm} sortOptions={sortOptions}></Sort>
          </div>
        </div>

        <CardList list={sortedList}></CardList>
        <div className="flex justify-end mt-10 py-10">
          <Pagination
            pageHandler={setPage}
            totalPages={totalPages}
            currentPage={page}
          ></Pagination>
        </div>
      </div>
      {/* <div>
        <TiArrowSortedUp></TiArrowSortedUp>
      </div> */}
    </div>
  );
};

export default Listing;
