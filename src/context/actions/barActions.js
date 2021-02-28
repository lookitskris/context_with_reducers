import { BAR_PLUS, BAR_MINUS } from "../constants";

export const addBar = () => {
  return {
    type: BAR_PLUS,
  };
};

export const minusBar = () => {
  return {
    type: BAR_MINUS,
  };
};
