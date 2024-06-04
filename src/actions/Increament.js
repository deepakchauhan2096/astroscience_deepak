import { INCREMENT_VALUE } from "./Constants.js";

export default value => {
  return {
    type: INCREMENT_VALUE,
    value: value
  };
};