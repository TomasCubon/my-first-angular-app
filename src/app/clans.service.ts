import { Injectable, signal, computed, inject } from '@angular/core';
import { Clan } from './models/player.model';
import { PlayerService } from './players.service';
import { log } from 'console';

@Injectable({
  providedIn: 'root',
})
export class ClansService {
  private playerService = inject(PlayerService);

  private _clans: Clan[] = [
    {
      id: 1,
      name: 'Wolf Pack',
      description: 'Skúsení bojovníci severu.',
      capacity: 3,
      avatarUrl: 'https://api.dicebear.com/9.x/shapes/svg?seed=WolfPack',
    },
    {
      id: 2,
      name: 'Fire Mages',
      description: 'Majstri ohňa a mágie.',
      capacity: 5,
      avatarUrl: 'https://api.dicebear.com/9.x/shapes/svg?seed=FireMages',
    },
  ];

  // clans = computed(() => this._clans());

  getClanById(id: number): Clan | undefined {
    return this._clans.find(c => c.id === id);
  }

  // addDefaultClan(): Clan {
  //   const current = this._clans;
  //   const newId = current.length ? Math.max(...current.map(c => c.id)) + 1 : 1;

  //   const newClan: Clan = {
  //     id: newId,
  //     name: `New Clan ${newId}`,
  //     description: 'Nový klan pripravený na dobrodružstvá.',
  //     capacity: 5,
  //     avatarUrl: `https://api.dicebear.com/9.x/shapes/svg?seed=NewClan${newId}`,
  //   };

  //   this._clans.set([...current, newClan]);
  //   return newClan;
  // }

  removeClan(id: number): void {
    // this._clans.set(this._clans().filter(c => c.id !== id));
    //remove clan
    this._clans = this._clans.filter((c) => c.id !== id)
    // hráčom, ktorí boli v tomto clane, zrušíme clanId
    this.playerService.clearClanFromPlayers(id);
  }

  addClan(clan: Clan) {
    console.log(clan)
    this._clans.push(clan);
  }

  getAllClans() {
    return this._clans;
  }
}