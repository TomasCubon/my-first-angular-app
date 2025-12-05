import { Component, EventEmitter, Output, input } from '@angular/core';

import { Quest } from '../models/player.model';

@Component({
  selector: 'app-quest-item',
  standalone: true,
  imports: [],
  templateUrl: './quest-item.html',
  styleUrls: ['./quest-item.css'],
})
export class QuestItem {
  quest = input.required<Quest>();

  @Output() open = new EventEmitter<number>();
  @Output() deleteQuest = new EventEmitter<number>();
}