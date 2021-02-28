import { BAR_PLUS } from "../constants";
import { BAR_MINUS } from "../constants";

const barReducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case BAR_PLUS:
      return {
        ...state,
        barValue: state.barValue + 15,
      };
    case BAR_MINUS:
      return {
        ...state,
        barValue: Math.max(state.barValue - 15, 2),
      };
    default:
      return state;
  }
};

export default barReducer;
