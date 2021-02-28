import { UPDATE_FRUIT } from "../constants";

const fruitReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_FRUIT:
      return {
        ...state,
        selectedFruit: payload,
      };
    default:
      return state;
  }
};

export default fruitReducer;
