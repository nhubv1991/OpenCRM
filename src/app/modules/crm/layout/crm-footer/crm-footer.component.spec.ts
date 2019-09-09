import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CRMFooterComponent } from './crm-footer.component';

describe('CRMFooterComponent', () => {
  let component: CRMFooterComponent;
  let fixture: ComponentFixture<CRMFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRMFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CRMFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
