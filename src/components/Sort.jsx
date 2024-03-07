import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";

const Sort = ({ sortHandler, sortOptions }) => {
  return (
    <div className="dropdown dropdown-bottom">
      <div tabIndex={0} role="button" className="btn m-1">
        SortBy
        <span>
          <IoIosArrowDropdown />
        </span>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {sortOptions &&
          sortOptions.map((item, index) => {
            return (
              <li
                onClick={() => {
                  sortHandler(Object.values(item)[0]);
                }}
                key={index}
              >
                <a>{Object.keys(item)[0]}</a>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Sort;
