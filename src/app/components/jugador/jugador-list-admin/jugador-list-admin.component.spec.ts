import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorListAdminComponent } from './jugador-list-admin.component';

describe('JugadorListAdminComponent', () => {
  let component: JugadorListAdminComponent;
  let fixture: ComponentFixture<JugadorListAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugadorListAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JugadorListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
