import React from "react";

const useDebounce = (input, delay = 1000) => {
  const [debouncedInput, setDebouncedInput] = React.useState(input);

  React.useEffect(() => {
    const timerID = setTimeout(() => {
      setDebouncedInput(input);
    }, delay);
    return () => {
      clearTimeout(timerID);
    };
  }, [input, delay]);
  return debouncedInput;
};

export default useDebounce;
