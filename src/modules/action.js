export const changeGnb = (idx) => ({
  type: "CHANGE_GNB",
  payload: {
    num: idx,
  },
});
export const changeCategory = (value) => ({
  type: "PRODUCTION_CATEGORY",
  payload: {
    value: value,
  },
});
export const changeSearchValue = (text) => ({
  type: "PRODUCTION_SEARCH",
  payload: {
    text: text,
  },
});
