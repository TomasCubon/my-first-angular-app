import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanList } from './clan-list';

describe('ClanList', () => {
  let component: ClanList;
  let fixture: ComponentFixture<ClanList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClanList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClanList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
