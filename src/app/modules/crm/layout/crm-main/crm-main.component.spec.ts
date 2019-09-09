import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CRMMainComponent } from './crm-main.component';

describe('CRMMainComponent', () => {
  let component: CRMMainComponent;
  let fixture: ComponentFixture<CRMMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRMMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CRMMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
