import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
//FIREBASE
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
//COMPONENTS
import { AppComponent } from './app.component';
import { AdminComponent } from './pages/admin/admin.component';
import { JugadorListComponent } from './components/jugador/jugador-list/jugador-list.component';
import { JugadorFormComponent } from './components/jugador/jugador-form/jugador-form.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
//SERVICES
import { SharedModule } from './shared/shared.module';
import { JugadorListAdminComponent } from './components/jugador/jugador-list-admin/jugador-list-admin.component';
// import { AuthGuard } from './guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    JugadorListComponent,
    AdminComponent,
    JugadorFormComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    JugadorListAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
