import { Component, computed, inject } from '@angular/core';

import { ActivatedRoute, RouterModule } from '@angular/router';
import { ClansService } from '../clans.service';
import { PlayerService } from '../players.service';

@Component({
  selector: 'app-clan-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './clans-detail.component.html',
  styleUrls: ['./clans-detail.component.css'],
})
export class ClanDetailComponent {
  private route = inject(ActivatedRoute);
  private clansService = inject(ClansService);
  private playerService = inject(PlayerService);

  clan = computed(() => {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return this.clansService.getClanById(id);
  });

  members = computed(() => {
    const c = this.clan();
    if (!c) return [];
    return this.playerService
      .players()
      .filter(p => p.clanId === c.id);
  });

  availablePlayers = computed(() => {
    const c = this.clan();
    if (!c) return [];
    return this.playerService
      .players()
      .filter(p => p.clanId === null);
  });

  addPlayerToClan(playerId: number) {
    const c = this.clan();
    if (!c) return;

    if (this.members().length >= c.capacity) {
      alert('Tento clan je už plný.');
      return;
    }

    this.playerService.updatePlayerClan(playerId, c.id);
  }

  removePlayerFromClan(playerId: number) {
    this.playerService.updatePlayerClan(playerId, null);
  }
}