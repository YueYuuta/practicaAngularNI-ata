import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, catchError, mergeMap } from 'rxjs/operators';
import { LoginService } from '../../auth/services/login.service';

import { Router } from '@angular/router';

import {
  AddUsuarioLogeado,
  loginFail,
  loginRequest,
  loginSuccess,
} from '../actions';

@Injectable()
export class PaginaEffects {
  loginRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginRequest),
      switchMap((action) => {
        return this.loginService.login(action.login).pipe(
          mergeMap((usuarioLogin) => {
            this.router.navigateByUrl('/');
            localStorage.setItem('token', usuarioLogin);
            return [
              AddUsuarioLogeado({ usuario: usuarioLogin }),
              loginSuccess(),
            ];
          }),
          catchError((error) => {
            return of(loginFail({ error: error.error.message }));
          })
        );
      })
    )
  );
  constructor(
    private actions$: Actions,
    private loginService: LoginService,
    private router: Router
  ) {}
}
