import { DECREMENT_VALUE } from "./Constants.js";

export default value => {
  return {
    type: DECREMENT_VALUE,
    value: value
  };
};