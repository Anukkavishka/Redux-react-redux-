const redux = require("redux");

const createStore = redux.createStore;

const initialState = {
  counter: 0
};
//you can create multiple reducers but eventually they all will be merged into single reducer.

//Reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1
    };
  }

  if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value // both these action.value , action.type are the  properties tha we should pass by the dispatcher to change state
    };
  }

  return state;
};

//Store
const store = createStore(rootReducer);
console.log(store.getState());

//subscription
//these makes sure that we don't have to execute getState() to know if internal state has been changed.

store.subscribe(() => {
  console.log("[Subscription]", store.getState());
});

//dispatching
store.dispatch({ type: "ADD_COUNTER", value: 10 });
console.log(store.getState());
store.dispatch({ type: "INC_COUNTER" });
console.log(store.getState());
