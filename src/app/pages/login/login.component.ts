import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(5)]],
      }
    )
  }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.form.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['admin']);
      })
      .catch(error => console.error(error));
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle()
      .then(response => {
        console.log(response);
        this.router.navigate(['admin']);
      })
      .catch(error => {
        alert("Error: email o contraseña incorrecta")
        console.error(error)
      })
  }

}
