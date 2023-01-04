import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
// import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isLoggedIn = true;

  // constructor(private afAuth: AngularFireAuth, private router: Router) {}


  canActivate(): boolean {
    if (this.isLoggedIn)
      console.log("TENES PERMISOS")
    else {
      console.error("NO TENES PERMISOS")
    }
    return this.isLoggedIn;
  }

  // canActivate() {
  //     return this.afAuth.authState.pipe(
  //       map((auth) => {
  //         if (!auth) {
  //           this.router.navigate(['/login']);
  //           return false;
  //         } else {
  //           return true;
  //         }
  //       })
  //     );
// }


}
