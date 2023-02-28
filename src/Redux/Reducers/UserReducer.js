const initialState = {
  token: "",
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGGED":
      return {
        ...state,
        token: action.payload,
      };
  }
  return state;
};

export default UserReducer;
