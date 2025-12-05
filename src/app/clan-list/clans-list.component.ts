import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ClansService } from '../clans.service';
import { PlayerService } from '../players.service';

@Component({
  selector: 'app-clans-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './clans-list.component.html',
  styleUrls: ['./clans-list.component.css'],
})
export class ClansListComponent {
  private clansService = inject(ClansService);
  private playerService = inject(PlayerService);
  private router = inject(Router);

  clans = signal(this.clansService.getAllClans());
  players = this.playerService.players;

  membersCount(clanId: number): number {
    return this.players().filter(p => p.clanId === clanId).length;
  }

  // addClan() {
  //   const newClan = this.clansService.addDefaultClan();
  //   this.router.navigate(['/clans', newClan.id]);
  // }

  deleteClan(id: number, event: MouseEvent) {
    event.stopPropagation();
    this.clansService.removeClan(id);
  }

  openClan(id: number) {
    this.router.navigate(['/clans', id]);
  }
}