// src/app/players.service.ts

import { Injectable, signal, computed } from '@angular/core';
import { Player } from './models/player.model';
import { PlayerLevel, playerLevels } from './levels';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  // 🧍‍♂️🧍‍♀️ Demo hráči – môžeš si upraviť
  private _players = signal<Player[]>([
    {
      id: 1,
      nickname: 'DeputyKnight',
      xp: 12000,
      clanId: 1,
      questIds: [1, 2],
      avatarUrl: '',
    },
    {
      id: 2,
      nickname: 'ArcainAngel',
      xp: 1000,
      clanId: null,
      questIds: [3],
      avatarUrl: '',
    },
    {
      id: 3,
      nickname: 'DemonSlayer',
      xp: 0,
      clanId: null,
      questIds: [],
      avatarUrl: '',
    },
  ]);


  players = computed(() => this._players());

  getPlayerById(id: number): Player | undefined {
    return this._players().find((p) => p.id === id);
  }


  addDefaultPlayer(): Player {
    const current = this._players();
    const newId = current.length ? Math.max(...current.map((p) => p.id)) + 1 : 1;

    const newPlayer: Player = {
      id: newId,
      nickname: `NewPlayer${newId}`,
      xp: 0,
      clanId: null,
      questIds: [],
      avatarUrl: `https://api.dicebear.com/9.x/pixel-art/svg?seed=NewPlayer${newId}`,
    };

    this._players.set([...current, newPlayer]);
    return newPlayer;
  }


  removePlayer(id: number): void {
    this._players.set(this._players().filter((p) => p.id !== id));
  }


  updatePlayerClan(playerId: number, clanId: number | null): void {
    this._players.update((players) =>
      players.map((p) => (p.id === playerId ? { ...p, clanId } : p)),
    );
  }


  clearClanFromPlayers(clanId: number): void {
    this._players.update((players) =>
      players.map((p) => (p.clanId === clanId ? { ...p, clanId: null } : p)),
    );
  }




  addQuestToPlayer(playerId: number, questId: number): void {
    this._players.update(players =>
      players.map(p => {
        if (p.id !== playerId) return p;


        if (p.questIds.includes(questId)) return p;

        return {
          ...p,
          questIds: [...p.questIds, questId],
        };
      })
    );
  }


  removeQuestFromPlayer(playerId: number, questId: number): void {
    this._players.update(players =>
      players.map(p =>
        p.id === playerId
          ? { ...p, questIds: p.questIds.filter(id => id !== questId) }
          : p
      )
    );
  }

  addPlayer(player: Player) {
    this._players.update(players => [...players, player]);
  }

  getPlayerLevel(player: string): PlayerLevel {
    const p = this.getPlayerByUsername(player);
    let level: PlayerLevel = playerLevels[0];
    for (const l of playerLevels) {
      if (p.xp >= l.xpRequired) {
        level = l;
      } else {
        break;
      }
    }
    return level;
  }
  getPlayerByUsername(username: string): Player {
    return this.players().find((player) => player.nickname === username) as Player;
  }
}