
//shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { ModalButtonComponent } from './components/modal-button/modal-button.component';

@NgModule({
  declarations: [
    ModalComponent,
    ModalButtonComponent
  ],
  providers: [],
  imports: [
    CommonModule
  ],
  exports:[ModalComponent, ModalButtonComponent]
})
export class SharedModule { }

