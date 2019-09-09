import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CRMHeaderComponent } from './crm-header.component';

describe('CRMHeaderComponent', () => {
  let component: CRMHeaderComponent;
  let fixture: ComponentFixture<CRMHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRMHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CRMHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
