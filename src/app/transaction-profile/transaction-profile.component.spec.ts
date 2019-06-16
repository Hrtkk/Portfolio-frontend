import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionProfileComponent } from './transaction-profile.component';

describe('TransactionProfileComponent', () => {
  let component: TransactionProfileComponent;
  let fixture: ComponentFixture<TransactionProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
