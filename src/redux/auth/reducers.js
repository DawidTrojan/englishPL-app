import {
  START_LOG_IN,
  LOG_IN,
  LOG_IN_ERROR,
  SIGN_OUT,
  SIGN_UP,
  SIGN_UP_ERROR
} from "./actions";

const initState = {
  authError: null,
  authSuccess: null,
  authLoading: false
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case START_LOG_IN:
      return {
        ...state,
        authLoading: true
      };
    case LOG_IN:
      return {
        ...state,
        authError: null,
        authSuccess: "Login Success",
        authLoading: false
      };

    case LOG_IN_ERROR:
      console.log("login failed");
      return {
        ...state,
        authError: "Login Failed"
      };

    case SIGN_OUT:
      return state;

    case SIGN_UP:
      return {
        ...state,
        authError: null
      };

    case SIGN_UP_ERROR:
      return {
        ...state,
        authError: action.error.message
      };

    default:
      return state;
  }
};
