export const initialState = {
  term: null,
  user: null,
};

export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term,
      };

    case "SET_USER": // when we get this type
      return {
        ...state, //return everything thats inside current state
        user: action.user, // and update the user
      };

    default:
      return state;
  }
};

export default reducer;
