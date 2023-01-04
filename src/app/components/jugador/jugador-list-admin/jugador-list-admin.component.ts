import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/models/jugador.model';
import { JugadorService } from 'src/app/services/jugador.service';

@Component({
  selector: 'app-jugador-list-admin',
  templateUrl: './jugador-list-admin.component.html',
  styleUrls: ['./jugador-list-admin.component.css']
})
export class JugadorListAdminComponent implements OnInit {

  jugadores: Jugador[] = [];

  constructor(private JugadorServ: JugadorService) { }

  ngOnInit(): void {
    this.cargarJugadores();
  }

  cargarJugadores(): void {
    this.JugadorServ.readJugadores().subscribe(
      data => {
        this.jugadores = data;
      }
    )
  }

  borrar(id: number) {
    this.JugadorServ.deleteJugador(id).subscribe(
      {
        next: data => {
          this.cargarJugadores()
        },
        error: err => {
          console.error(err)
        }
      }
    )
  }
}
