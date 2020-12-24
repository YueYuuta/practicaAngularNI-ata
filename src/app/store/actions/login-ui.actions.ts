import { createAction, props } from '@ngrx/store';
import { LoginModel } from '../models/login';

export const loginRequest = createAction(
  '[LoginModule] loginRequest',
  props<{ login: LoginModel }>()
);

export const loginSuccess = createAction('[LoginModule] loginSuccess');

export const loginFail = createAction(
  '[LoginModule] loginFail',
  props<{ error: string }>()
);
