let initialState = {
  value: 1,
  totalPages: 1,
};

const pageReducers = (state = initialState, action) => {
  switch (action.type) {
    case "NextPage":
      console.log("actions", action);
      return {
        ...state,
        value:
          action.value < action.totalPages ? action.value + 1 : action.value,
        totalPages: action.totalPages,
      };

    case "PrevPage":
      return {
        ...state,
        value: action.value > 1 ? action.value - 1 : 1,
      };
    case "ClickedPage":
      return {
        ...state,
        value: action.ClickedValue,
      };
    default:
      return state;
  }
};

export default pageReducers;
