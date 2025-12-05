import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { QuestsService } from './quests.service';
import { Quest } from '../models/player.model'; 
import { QuestItem } from '../quest-item/quest-item';

@Component({
  selector: 'app-quests',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, QuestItem],
  templateUrl: './quests.html',
  styleUrls: ['./quests.css']
})
export class QuestsComponent {
  private questsService = inject(QuestsService);

  questsSig = this.questsService.questsSig;

  
  onAdd(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched(); 
      return;
    }

    const value = form.value;

    
    const newId =
      this.questsSig().length > 0
        ? Math.max(...this.questsSig().map(q => q.id)) + 1
        : 1;

    const newQuest: Quest = {
      id: newId,
      title: value.title,
      description: value.description,
      xp: Number(value.xp),
      completed: false,
    };

    this.questsService.addQuest(newQuest);

    form.reset(); 
  }

  
  deleteQuest(id: number) {
    this.questsService.removeQuest(id);
  }
}