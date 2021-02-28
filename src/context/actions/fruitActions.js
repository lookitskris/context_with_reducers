import { UPDATE_FRUIT } from "../constants";

export const updateFruitAction = (fruit) => {
  return {
    type: UPDATE_FRUIT,
    payload: fruit,
  };
};
