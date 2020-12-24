import {
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer,
} from '@ngrx/store';

import { loginReducer } from './login.reducers';
import { loginUIReducer } from './login-ui.reducers';
import { PaginasModuleState } from '../states/usuario-login-module.state';
import { environment } from '../../../environments/environment';

export const reducers: ActionReducerMap<PaginasModuleState> = {
  Usuario: loginReducer,
  LoginUI: loginUIReducer,
};

export const metaReducers: MetaReducer<PaginasModuleState>[] = !environment.production
  ? []
  : [];

export const getPaginasModuleState = createFeatureSelector<PaginasModuleState>(
  'paginas-module'
);
