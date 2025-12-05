import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClansNew } from './clans-new';

describe('ClansNew', () => {
  let component: ClansNew;
  let fixture: ComponentFixture<ClansNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClansNew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClansNew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
