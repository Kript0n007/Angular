import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosListaComponent } from './carros-lista.component';

describe('CarrosListaComponent', () => {
  let component: CarrosListaComponent;
  let fixture: ComponentFixture<CarrosListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrosListaComponent]
    });
    fixture = TestBed.createComponent(CarrosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
