const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  if (action.type === "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1
    };
  }

  if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.val // both these action.value , action.type are the  properties tha we should pass by the dispatcher to change state
    };
  }

  return state;
};

export default reducer;
