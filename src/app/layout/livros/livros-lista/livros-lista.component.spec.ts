import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosListaComponent } from './livros-lista.component';

describe('LivrosListaComponent', () => {
  let component: LivrosListaComponent;
  let fixture: ComponentFixture<LivrosListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivrosListaComponent]
    });
    fixture = TestBed.createComponent(LivrosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
