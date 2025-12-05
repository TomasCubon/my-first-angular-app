import { Component, computed, inject, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PlayerService } from '../players.service';
import { QuestsService } from '../quests/quests.service';
import { Quest } from '../models/player.model';




@Component({
  selector: 'app-player-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent {
  completedQuestsSig: WritableSignal<Quest[]> = signal([]);
  inProgressQuestsSig: WritableSignal<Quest[]> = signal([]);
  private route = inject(ActivatedRoute);
  private playerService = inject(PlayerService);
  private questsService = inject(QuestsService);
  playerLevel :string = '';
  playerNextLevelXp :number = 0;

  readonly ALL_QUESTS_MOCK = this.questsService.questsSig();

  player = computed(() => {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return this.playerService.getPlayerById(id);
  });


  playerQuests = computed(() => {
    const p = this.player();
    if (!p) return [];
    return this.ALL_QUESTS_MOCK.filter(q => p.questIds.includes(q.id));
  });


  availableQuests = computed(() => {
    const p = this.player();
    if (!p) return [];
    return this.ALL_QUESTS_MOCK.filter(q => !p.questIds.includes(q.id));
  });

  constructor() {
    this.completedQuestsSig.set(
      this.playerQuests().filter(q => q.completed)
    );
    this.inProgressQuestsSig.set(
      this.playerQuests().filter(q => !q.completed)
    );
    const p = this.player();
    if (p && p.nickname) {
      this.playerLevel = this.playerService.getPlayerLevel(p.nickname).title;
      this.playerNextLevelXp = this.playerService.getPlayerLevel(p.nickname).xpRequired;
    } else {
      this.playerLevel = '';
    }
  }

  addQuest(id: number) {
    const p = this.player();
    if (!p) return;
    this.playerService.addQuestToPlayer(p.id, id);
  }


  removeQuest(id: number) {
    const p = this.player();
    if (!p) return;
    this.playerService.removeQuestFromPlayer(p.id, id);
  }

  completedQuests(id: number) {
    const updated = this.playerQuests().map((q) =>
      q.id === id ? { ...q, completed: !q.completed } : q
    );

    this.playerQuests().forEach((quest) => {
      if (quest.id === id) {
        quest.completed = !quest.completed;
      }
    });

    // Refresh the local signals used for rendering the two columns
    this.completedQuestsSig.set(updated.filter((q) => q.completed));
    this.inProgressQuestsSig.set(updated.filter((q) => !q.completed));
  }
}