/* 액션 타입 선언 */
const initialState = {
  number: 0,
};

export default function commonReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_GNB":
      return {
        ...state,
        number: action.payload.num,
      };
    default:
      return state;
  }
}
