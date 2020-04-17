import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResClinicoRegisterComponent } from './res-clinico-register.component';

describe('ResClinicoRegisterComponent', () => {
  let component: ResClinicoRegisterComponent;
  let fixture: ComponentFixture<ResClinicoRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResClinicoRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResClinicoRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
