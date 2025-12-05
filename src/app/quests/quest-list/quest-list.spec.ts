import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestList } from './quest-list.component';

describe('QuestList', () => {
  let component: QuestList;
  let fixture: ComponentFixture<QuestList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
