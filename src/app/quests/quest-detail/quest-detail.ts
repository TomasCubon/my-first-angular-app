

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { QuestsService } from '../quests.service';
import { Quest } from '../../models/player.model';   

@Component({
  selector: 'app-quest-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './quest-detail.html',
  styleUrls: ['./quest-detail.css'],   
})
export class QuestDetail implements OnInit {
  quest?: Quest;

  constructor(
    private route: ActivatedRoute,
    private questService: QuestsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.quest = this.questService.getQuestById(id) || undefined;
  }

  deleteQuest(): void {
    if (!this.quest) return;

    this.questService.removeQuest(this.quest.id);
    this.router.navigate(['/quests']);
  }
}