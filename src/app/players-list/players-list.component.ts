import { Component, inject, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { PlayerService } from '../players.service';
import { QuestsService } from '../quests/quests.service';
import { getPlayerLevel, getXpToNextLevel, playerLevels } from '../levels';
import { Search } from '../search/search';
import { Player } from '../models/player.model';

@Component({
  selector: 'app-players-list',
  standalone: true,
  imports: [CommonModule, RouterModule, Search],
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent {
  private playerService = inject(PlayerService);

  private router = inject(Router);
  private questsService = inject(QuestsService);

  
  players = signal<Player[]>(this.playerService.players());
  private syncPlayers = effect(() => {
    this.players.set(this.playerService.players());
  });

  questsSig = this.questsService.questsSig;

  
  getPlayerCompletedQuestsXp(player: { questIds: number[] }) {
    const quests = this.questsSig();
    return quests
      .filter(q => player.questIds.includes(q.id) && q.completed)
      .reduce((sum, q) => sum + q.xp, 0);
  }

  getPlayerLevel(xp: number) {
    return getPlayerLevel(xp);
  }

  getXpToNextLevel(xp: number) {
    return getXpToNextLevel(xp);
  }

  getLevelProgress(xp: number) {
    console.log('Calculating level progress for XP:', xp);
    const level = getPlayerLevel(xp);
    const next = playerLevels.find(l => l.level === level.level + 1);
    if (!next) return 1;
    return (xp - level.xpRequired) / (next.xpRequired - level.xpRequired);
  }

  addPlayer() {
    const newPlayer = this.playerService.addDefaultPlayer();
    this.router.navigate(['/players', newPlayer.id]);
  }

  removePlayer(id: number, event: MouseEvent) {
    event.stopPropagation();
    this.playerService.removePlayer(id);
  }

  goToDetail(id: number) {
    this.router.navigate(['/players', id]);
  }

  onSearchChanged(term: string) {
    const allPlayers = this.playerService.players();
        if (!term) {
            this.players.set(allPlayers);
        } else {
            const filteredPlayers = allPlayers.filter(player =>
                player.nickname.toLowerCase().includes(term.toLowerCase()));
            this.players.set(filteredPlayers);
        }
  }
}