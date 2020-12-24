import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../../services/login.service';
import { LoginModel } from '../../../store/models/login';
import { loginRequest } from '../../../store/actions/login-ui.actions';
import { Store } from '@ngrx/store';
import { PaginasModuleState } from '../../../store/states/usuario-login-module.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<PaginasModuleState>
  ) {}

  ngOnInit(): void {
    this.form();
  }
  private form(): void {
    this.loginForm = this.fb.group({
      Usuario: ['', Validators.required],
      Contraseña: ['', Validators.required],
    });
  }
  login(event): void {
    if (this.loginForm.valid) {
      event.preventDefault();
      const login: LoginModel = this.loginForm.value;
      const action = loginRequest({ login });
      this.store.dispatch(action);
    }
  }
}
