import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log('app', this.authService.isLoggedIn)
    this.authService.onAuthChange()
  }

  logout() {
    this.authService.logout()
      .then((res) => {
        console.log(res)
        this.router.navigate(['']);
        // this.authService.isLoggedIn = false;
      })
      .catch(error => console.log(error));
  }
}
