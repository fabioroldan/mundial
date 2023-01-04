import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

class UserToken { }

class PermisosAdmin {
  canActivate(): boolean {
    return true;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PermisosGuard implements CanActivate {

  // constructor(private permisos: PermisosAdmin, private usuario: UserToken) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('Tienes permisos')
    return true;
    //this.permisos.canActivate(this.usuario, route.params.id);
  }

}
