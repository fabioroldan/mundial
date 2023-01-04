import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jugador } from '../../models/jugador.model';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  url = 'http://localhost:5000/jugador';

  constructor(private http: HttpClient) { }

  // CRUD

  public createJugador(jugador: Jugador): Observable<any> {
    return this.http.post<any>(this.url, jugador);
  }

  public readJugadores(): Observable<Jugador[]> {
    return this.http.get<Jugador[]>(this.url);
  }

  public readJugador(id: number): Observable<Jugador> {
    return this.http.get<Jugador>(this.url + `/${id}`);
  }

  public updateJugador(jugador: Jugador): Observable<any> {
    return this.http.put<any>(this.url + `/${jugador.id}`, jugador);
  }

  public deleteJugador(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `/${id}`);
  }

}
