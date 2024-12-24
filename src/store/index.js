import { createStore } from "redux";

const INITIAL_VALUE = {
  count: 0,
  private: false,
};

const counterReducer = (store = INITIAL_VALUE, action) => {
  switch (action.type) {
    case "INC":
      return { ...store, count: store.count + 1 };
    case "DEC":
      return { ...store, count: store.count - 1 };
    case "ADD":
      return { ...store, count: store.count + parseInt(action.payload.num) };
    case "SUB":
      return { ...store, count: store.count - parseInt(action.payload.num) };
    case "PRIVACY":
      return { ...store, private: !store.private };
    default:
      return store;
  }
};

const counter = createStore(counterReducer);
export default counter;
