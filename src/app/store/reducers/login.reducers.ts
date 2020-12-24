import { createReducer, on } from '@ngrx/store';

import { UsuarioModel } from '../models/usuario';

import * as loginActions from '../actions';

export const initialState: UsuarioModel = null;

export const loginReducer = createReducer(
  initialState,
  on(loginActions.AddUsuarioLogeado, (state, { usuario }) => {
    return {
      ...state,
      Contraseña: usuario.Contraseña,
      Nombre: usuario.Nombre,
      Role: usuario.Role,
      Usuario: usuario.Usuario,
    };
  })
);
