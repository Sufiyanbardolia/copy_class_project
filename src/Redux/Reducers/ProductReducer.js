const initialState = {
  product: [],
};

export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        product: action.payload,
      };
  }
  return state;
};
