import React from "react";
import useDebounce from "../hooks/useDebounce";

const SearchBox = ({ inputHandler, value }) => {
  const [input, setInput] = React.useState(value);
  const debouncedValue = useDebounce(input);

  React.useEffect(() => {
    if (debouncedValue) {
      inputHandler(debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <label className="input input-bordered rounded-lg flex items-center gap-2">
      <input
        type="text"
        className="grow"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search"
      ></input>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="w-4 h-4 opacity-70"
      >
        <path
          fillRule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clipRule="evenodd"
        />
      </svg>
    </label>
  );
};

export default SearchBox;
