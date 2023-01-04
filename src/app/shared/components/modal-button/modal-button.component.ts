import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-modal-button',
  templateUrl: './modal-button.component.html',
  styleUrls: ['./modal-button.component.css']
})
export class ModalButtonComponent {
  @Input() modal!: any;

  open() {
    this.modal.active = true
  }

  close() {
    this.modal.active = false
  }

}
