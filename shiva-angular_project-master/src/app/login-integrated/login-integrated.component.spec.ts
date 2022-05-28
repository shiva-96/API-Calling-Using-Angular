import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginIntegratedComponent } from './login-integrated.component';

describe('LoginIntegratedComponent', () => {
  let component: LoginIntegratedComponent;
  let fixture: ComponentFixture<LoginIntegratedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginIntegratedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginIntegratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
