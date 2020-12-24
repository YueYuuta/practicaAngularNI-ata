import { LoginUIState } from './login-ui.state';
import { UsuarioModel } from '../models/usuario';

export interface PaginasModuleState {
  Usuario: UsuarioModel;
  LoginUI: LoginUIState;
}
