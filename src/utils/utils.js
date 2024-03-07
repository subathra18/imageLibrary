export const truncate = (str, length) => {
  if (str.length > length) {
    return str.substring(0, length - 1) + "...";
  }
  return str;
};

export const sortBy = (input, key, order) => {
  switch (order) {
    case "asc":
      input.sort((a, b) => {
        return a[key] - b[key];
      });
      break;
    case "desc":
      input.sort((a, b) => {
        return b[key] - a[key];
      });
      break;
    default:
      return input;
  }
  console.log(input);
  return input;
};
