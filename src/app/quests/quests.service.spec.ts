import { TestBed, ComponentFixture } from '@angular/core/testing';

import { Quests } from './quests';

describe('Quests', () => {
  let service: Quests;
  let fixture: ComponentFixture<Quests>;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Quests);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

