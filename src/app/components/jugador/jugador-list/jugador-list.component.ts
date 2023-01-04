import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/models/jugador.model';
import { JugadorService } from 'src/app/services/jugador.service';

@Component({
  selector: 'app-jugador-list',
  templateUrl: './jugador-list.component.html',
  styleUrls: ['./jugador-list.component.css']
})
export class JugadorListComponent implements OnInit {
  jugadores: Jugador[] = [];

  constructor(private JugadorServ: JugadorService) { }

  ngOnInit(): void {
    this.cargarJugadores();
    console.log(this.jugadores)
  }

  cargarJugadores(): void {
    this.JugadorServ.readJugadores().subscribe(
      data => {
        this.jugadores = data;
      }
    )
  }

}
