import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNomeComponent } from './modal-nome.component';

describe('ModalNomeComponent', () => {
  let component: ModalNomeComponent;
  let fixture: ComponentFixture<ModalNomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
