import { Injectable, signal } from '@angular/core';
import { Quest } from '../models/player.model';

@Injectable({
  providedIn: 'root',
})
export class QuestsService {
  private _questsSig = signal<Quest[]>([
    {
      id: 1,
      title: 'Zlomený nos na SPŠ-IT',
      description: 'Bitka storočia skončila zlomeninou.',
      xp: 60,
      completed: false,
    },
    {
      id: 2,
      title: 'Pempinova výprava do lesa',
      description: 'Prechádzka do lesa a z lesa.',
      xp: 80,
      completed: true,
    },
  ]);
  // toto používaš v komponente
  questsSig = this._questsSig;

  getquestsSig() {
    return this._questsSig;
  }


  getQuestById(id: number): Quest | undefined {
    return this._questsSig().find(q => q.id === id);
  }

  addQuest(quest: Quest): void {
    this._questsSig.update(quests => [...quests, quest]);
  }

  removeQuest(id: number): void {
    this._questsSig.update(quests => quests.filter(q => q.id !== id));
  }
}