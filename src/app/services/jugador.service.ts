import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Jugador } from '../models/jugador.model';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  jugadores: Jugador[] = []

  constructor() {
    this.jugadores = this.popularJugadores();
  }

  // CRUD

  public createJugador(jugador: Jugador): Observable<any> {
    this.jugadores.push(jugador);
    return of(jugador);
  }

  public readJugadores(): Observable<Jugador[]> {
    return of(this.jugadores);
  }

  public readJugador(id: number): Observable<any> {
    return of(this.jugadores.find(j => j.id == id));
  }

  public updateJugador(jugador: Jugador): Observable<any> {
    const index = this.jugadores.findIndex(j => j.id == jugador.id);
    this.jugadores[index] = jugador;
    return of(jugador);
  }

  public deleteJugador(id: number): Observable<any> {
    this.jugadores = this.jugadores.filter((e) => e.id !== id);
    return of(undefined);
  }

  popularJugadores() {
    return [
      {
        id: 1,
        nombre: "Emiliano",
        apellido: "Martínez",
        equipo: "Aston Villa",
        imagen: "assets/images/img.webp",
        posicion: "arquero"
      },
      {
        id: 2,
        nombre: "Gerónimo",
        apellido: "Rulli",
        equipo: "Villarreal",
        imagen: "assets/images/img.webp",
        posicion: "arquero"
      },
      {
        id: 3,
        nombre: "Franco",
        apellido: "Armani",
        equipo: "River",
        imagen: "assets/images/img.webp",
        posicion: "arquero"
      },
      {
        id: 4,
        nombre: "Nahuel",
        apellido: "Molina",
        equipo: "Atlético de Madrid",
        imagen: "assets/images/img.webp",
        posicion: "defensor"
      },
      {
        id: 5,
        nombre: "Gonzalo",
        apellido: "Montiel",
        equipo: "Sevilla",
        imagen: "assets/images/img.webp",
        posicion: "defensor"
      },
      {
        id: 6,
        nombre: "Cristian",
        apellido: "Romero",
        equipo: "Tottenham",
        imagen: "assets/images/img.webp",
        posicion: "defensor"
      },
      {
        id: 7,
        nombre: "Germán",
        apellido: "Pezzella",
        equipo: "Betis",
        imagen: "assets/images/img.webp",
        posicion: "defensor"
      },
      {
        id: 8,
        nombre: "Nicolás",
        apellido: "Otamendi",
        equipo: "Benfica",
        imagen: "assets/images/img.webp",
        posicion: "defensor"
      },
      {
        id: 9,
        nombre: "Lisandro",
        apellido: "Martínez",
        equipo: "Manchester United",
        imagen: "assets/images/img.webp",
        posicion: "defensor"
      },
      {
        id: 10,
        nombre: "Marcos",
        apellido: "Acuña",
        equipo: "Sevilla",
        imagen: "assets/images/img.webp",
        posicion: "defensor"
      },
      {
        id: 11,
        nombre: "Nicolás",
        apellido: "Tagliafico",
        equipo: "Olympique de Lyon",
        imagen: "assets/images/img.webp",
        posicion: "defensor"
      },
      {
        id: 12,
        nombre: "Juan",
        apellido: "Foyth",
        equipo: "Villarreal",
        imagen: "assets/images/img.webp",
        posicion: "defensor"
      },
      {
        id: 13,
        nombre: "Rodrigo",
        apellido: "De Paul",
        equipo: "Atlético de Madrid",
        imagen: "assets/images/img.webp",
        posicion: "mediocampista"
      },
      {
        id: 14,
        nombre: "Leandro",
        apellido: "Paredes",
        equipo: "Juventus",
        imagen: "assets/images/img.webp",
        posicion: "mediocampista"
      },
      {
        id: 15,
        nombre: "Alexis",
        apellido: "Mac Allister",
        equipo: "Brighton",
        imagen: "assets/images/img.webp",
        posicion: "mediocampista"
      },
      {
        id: 16,
        nombre: "Guido",
        apellido: "Rodríguez",
        equipo: "Betis",
        imagen: "assets/images/img.webp",
        posicion: "mediocampista"
      },
      {
        id: 17,
        nombre: "Alejandro",
        apellido: "Gómez",
        equipo: "Sevilla",
        imagen: "assets/images/img.webp",
        posicion: "mediocampista"
      },
      {
        id: 18,
        nombre: "Enzo",
        apellido: "Fernández",
        equipo: "Benfica",
        imagen: "assets/images/img.webp",
        posicion: "mediocampista"
      },
      {
        id: 19,
        nombre: "Exequiel",
        apellido: "Palacios",
        equipo: "Bayer Leverkusen",
        imagen: "assets/images/img.webp",
        posicion: "mediocampista"
      },
      {
        id: 20,
        nombre: "Ángel",
        apellido: "Di María",
        equipo: "Juventus",
        imagen: "assets/images/img.webp",
        posicion: "delantero"
      },
      {
        id: 21,
        nombre: "Lautaro",
        apellido: "Martínez",
        equipo: "Inter",
        imagen: "assets/images/img.webp",
        posicion: "delantero"
      },
      {
        id: 22,
        nombre: "Julián",
        apellido: "Álvarez",
        equipo: "Manchester City",
        imagen: "assets/images/img.webp",
        posicion: "delantero"
      },
      {
        id: 23,
        nombre: "Paulo",
        apellido: "Dybala",
        equipo: "Roma",
        imagen: "assets/images/img.webp",
        posicion: "delantero"
      },
      {
        id: 24,
        nombre: "Nicolás",
        apellido: "González",
        equipo: "Fiorentina",
        imagen: "assets/images/img.webp",
        posicion: "delantero"
      },
      {
        id: 25,
        nombre: "Joaquín",
        apellido: "Correa",
        equipo: "Inter",
        imagen: "assets/images/img.webp",
        posicion: "delantero"
      },
      {
        id: 26,
        nombre: "Lionel",
        apellido: "Messi",
        equipo: "París Saint-Germain",
        imagen: "assets/images/img.webp",
        posicion: "delantero"
      }
    ]
  }
}
