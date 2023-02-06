const initialState = {
  item: {},
};

const dataReducers = (state = initialState, action) => {
  switch (action.type) {
    case "Movie Details":
      return {
        ...state,
        item: action.item,
      };

    default:
      return state;
  }
};

export default dataReducers;
