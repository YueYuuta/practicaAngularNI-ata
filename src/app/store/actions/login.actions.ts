import { createAction, props } from '@ngrx/store';
import { UsuarioModel } from '../models/usuario';

export const AddUsuarioLogeado = createAction(
  '[UsuarioLoginModule] AddUsuarioLogeado',
  props<{ usuario: UsuarioModel }>()
);
