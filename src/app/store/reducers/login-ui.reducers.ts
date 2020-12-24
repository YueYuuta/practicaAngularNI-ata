import { createReducer, on } from '@ngrx/store';
import * as loginUIActions from '../actions';
import { LoginUIState } from '../states/login-ui.state';

export const initialState: LoginUIState = {
  errorLogin: null,
  loadingLogin: false,
};

export const loginUIReducer = createReducer(
  initialState,

  on(loginUIActions.loginRequest, (state) => {
    return {
      ...state,
      loadingLogin: true,
      errorLogin: null,
    };
  }),
  on(loginUIActions.loginSuccess, (state) => {
    return {
      ...state,
      loadingLogin: false,
      errorLogin: null,
    };
  }),
  on(loginUIActions.loginFail, (state, { error }) => {
    return {
      ...state,
      loadingLogin: false,
      errorLogin: error || null,
    };
  })
);
