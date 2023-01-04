import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Jugador, POSICIONES } from 'src/app/models/jugador.model';
import { JugadorService } from 'src/app/services/jugador.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-jugador-form',
  templateUrl: './jugador-form.component.html',
  styleUrls: ['./jugador-form.component.css']
})
export class JugadorFormComponent implements OnInit {
  id: number = -1;
  form: FormGroup;
  posiciones = POSICIONES;

  constructor(
    private formBuilder: FormBuilder,
    private JugadorServ: JugadorService,
    private route: ActivatedRoute,
    private router: Router,
    private storage: Storage
  ) {
    this.form = this.formBuilder.group({
      id: [''],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      posicion: ['', [Validators.required]],
      equipo: ['', [Validators.required]],
      imagen: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.cargarFormulario(this.id);
  }

  cargarFormulario(id: number) {
    this.JugadorServ.readJugador(id).subscribe(
      {
        next: data => {
          this.form.setValue(data);
        },
        error: err => {
          console.error(err)
        }
      }
    )
  }

  //👇 esto es solo para hacer pruebas en local
  async onImagenSeleccionada(e: any) {
    let imagen = e.target.files[0]
    // let url = 'assets/img/' + nombreImagen;
    let imgRef = ref(this.storage, `images/${imagen.name}`);

    let response = await uploadBytes(imgRef, imagen)
      .catch(error => console.error(error))
    console.log(response);

    let url = await getDownloadURL(imgRef)
      .catch(error => console.error(error));


    this.form.patchValue({ imagen: url });
    console.log(url);
  }

  guardar() {
    let jugador = this.form.value;

    if (jugador.id == '') {
      this.JugadorServ.createJugador(jugador).subscribe(
        data => {
          this.router.navigate(['/admin']);
        }
        )
      } else {
        this.JugadorServ.updateJugador(jugador).subscribe(
          data => {
          this.router.navigate(['/admin']);
        }
      )
    }
  }
}
