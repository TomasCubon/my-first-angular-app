import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Clan } from '../models/player.model';
import { ClansService } from '../clans.service';

@Component({
  selector: 'app-clans-new',
  imports: [FormsModule],
  templateUrl: './clans-new.html',
  styleUrl: './clans-new.css'
})
export class ClansNew {
  private clansService = inject(ClansService);
  clandata: Clan =  {
    id: 0,
    name: '',
    description: '',
    capacity: 0
  };
  clanName: string = '';
  clanDescription: string = ''
  clanCapacity: number = 0;

  onSubmit(clanForm: any) {
    this.clandata = {
      id: 0, 
      name: this.clanName,
      description: this.clanDescription,
      capacity: this.clanCapacity
    };
    console.log(this.clandata);
    this.clansService.addClan(this.clandata);
    clanForm.reset();
  }
}