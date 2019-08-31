export const START_LOG_IN = "[start-login] Starting login";
export const LOG_IN = "[login] Login Success";
export const LOG_IN_ERROR = "[login-error] Login Error";

export const SIGN_OUT = "[signout] Signout Success";

export const SIGN_UP = "[signup] Signup Success";
export const SIGN_UP_ERROR = "[signup-error] Signup Error";

export const signIn = (email, password) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({ type: START_LOG_IN });
      })
      .then(() => {
        dispatch({ type: LOG_IN });
      })
      .catch(error => {
        dispatch({ type: LOG_IN_ERROR, error });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: SIGN_OUT });
      });
  };
};

export const signUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(response => {
        return firestore
          .collection("users")
          .doc(response.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName
          });
      })
      .then(() => {
        dispatch({ type: SIGN_UP });
      })
      .catch(error => {
        dispatch({ type: SIGN_UP_ERROR, error });
      });
  };
};
