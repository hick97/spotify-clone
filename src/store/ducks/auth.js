import produce from 'immer';
// Auth Duck
export const Types = {
  SIGN_IN_REQUEST: '@auth/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS: '@auth/SIGN_IN_SUCCESS',
  SIGN_UP_REQUEST: '@auth/SIGN_UP_REQUEST',
  SIGN_FAILURE: '@auth/SIGN_FAILURE',
  SIGN_OUT: '@auth/SIGN_OUT',
};

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

// Reducer
export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case Types.SIGN_IN_REQUEST: {
        draft.loading = true;
        break;
      }
      case Types.SIGN_IN_SUCCESS: {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case Types.SIGN_FAILURE: {
        draft.loading = false;
        break;
      }
      case Types.SIGN_OUT: {
        draft.token = null;
        draft.signed = false;
        break;
      }
      default:
    }
  });
}

// Action creators
export const Creators = {
  signInRequest: (email, password) => ({
    type: Types.SIGN_IN_REQUEST,
    payload: { email, password },
  }),

  signInSuccess: (token, user) => ({
    type: Types.SIGN_IN_SUCCESS,
    payload: { token, user },
  }),

  signUpRequest: (name, email, password, confirm_password) => ({
    type: Types.SIGN_UP_REQUEST,
    payload: {
      name, email, password, confirm_password,
    },
  }),

  signFailure: () => ({
    type: Types.SIGN_FAILURE,
  }),

  signOut: () => ({
    type: Types.SIGN_OUT,
  }),
};
