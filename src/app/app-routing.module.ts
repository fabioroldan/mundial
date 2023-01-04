import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

import { JugadorFormComponent } from './components/jugador/jugador-form/jugador-form.component';
import { JugadorListComponent } from './components/jugador/jugador-list/jugador-list.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
// import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'admin',
    children: [
      {
        path: '',
        component: AdminComponent,
        ...canActivate(() => redirectUnauthorizedTo(['/login'])),
      // canActivate: [AuthGuard]
    },
      {
        path: 'jugador',
        children: [
          { path: '', component: JugadorListComponent },
          { path: 'crear', component: JugadorFormComponent },
          { path: 'editar/:id', component: JugadorFormComponent }
        ]
      }
    ]
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
