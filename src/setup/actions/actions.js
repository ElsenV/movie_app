export const NextPage = (value, genreName, totalPages) => {
  console.log("action", value);
  return {
    type: "NextPage",
    genreName: genreName,
    value: value,
    totalPages: totalPages,
  };
};
export const PrevPage = (value, genreName) => {
  console.log("PREV value", value);
  return { type: "PrevPage", genre: genreName, value: value };
};

export const ClickedPage = (clickedValue) => {
  return {
    type: "ClickedPage",
    ClickedValue: clickedValue,
  };
};
