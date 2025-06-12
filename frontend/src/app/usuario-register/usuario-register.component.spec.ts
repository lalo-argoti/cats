import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UsuarioRegisterComponent } from './usuario-register.component';

describe('UsuarioRegisterComponent', () => {
  let component: UsuarioRegisterComponent;
  let fixture: ComponentFixture<UsuarioRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [UsuarioRegisterComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty initial form fields', () => {
    expect(component.usuario).toBe('');
    expect(component.nombres).toBe('');
    expect(component.correo).toBe('');
    expect(component.password).toBe('');
    expect(component.repassword).toBe('');
  });

  it('should detect password mismatch', () => {
    component.password = '123456';
    component.repassword = '654321';
    expect(component.passwordMismatch).toBeTrue();
  });

  it('should not detect password mismatch when passwords match', () => {
    component.password = '123456';
    component.repassword = '123456';
    expect(component.passwordMismatch).toBeFalse();
  });
});
