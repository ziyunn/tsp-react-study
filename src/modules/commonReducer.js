/* 액션 타입 선언 */
const initialState = {
  number: 0,
  production: {
    category: "0",
    text: null,
  },
};

export default function commonReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_GNB":
      return {
        ...state,
        number: action.payload.num,
      };
    case "PRODUCTION_CATEGORY":
      return {
        ...state,
        production: {
          ...state.production,
          category: action.payload.value,
        },
      };
    case "PRODUCTION_SEARCH":
      return {
        ...state,
        production: {
          ...state.production,
          text: action.payload.text,
        },
      };
    default:
      return state;
  }
}
