import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Player } from '../models/player.model';
import { PlayerService } from '../players.service';

@Component({
  selector: 'app-player-new',
  imports: [FormsModule],
  templateUrl: './player-new.html',
  styleUrl: './player-new.css'
})
export class PlayerNew {
  private playerService = inject(PlayerService);
  playerdata: Player =  {
    id: 0,
    nickname: '',
    xp: 0,
    questIds: [],
    clanId: null
  }

  nickname: string = '';
  level: number = 1;
  clanId: number | null = null;

  onSubmit(playerForm: any) {
    this.playerdata = {
      id: 0, 
      nickname: this.nickname,
      xp: 0,
      questIds: [],
      clanId: this.clanId
    };
    this.playerService.addPlayer(this.playerdata);
    playerForm.reset();
  }

}