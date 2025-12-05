import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quest-list',
  standalone: true,
  templateUrl: './quest-list.component.html'
})
export class QuestListComponent {
  @Input() title!: string;
  @Input() quests!: number[];
  @Output() toggle = new EventEmitter<number>();

  toggleQuest(id: number) {
    this.toggle.emit(id);
  }
}
