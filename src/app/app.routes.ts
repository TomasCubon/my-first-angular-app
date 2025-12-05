import { Routes } from '@angular/router';
import { QuestsComponent } from './quests/quests';
import { Home } from './home/home';
import { QuestDetail } from './quests/quest-detail/quest-detail';
import { PlayersListComponent } from './players-list/players-list.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { ClansListComponent } from './clan-list/clans-list.component';
import { ClanDetailComponent } from './clan-detail/clans-detail.component';
import { ClansNew } from './clans-new/clans-new';
import { PlayerNew } from './player-new/player-new';


export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home page',
  },
  {
    path: 'quests',
    component: QuestsComponent,
    title: 'Quests page',
  },
  {
    path: 'quests/:id',
    component: QuestDetail,
    title: 'Quest detail',
  },

  {
    path: 'players',
    component: PlayersListComponent,
    title: 'Players page',
  },
  {
    path: 'players/new',
    component: PlayerNew,
    title: 'New Player',
  },
  {
    path: 'players/:id',
    component: PlayerDetailComponent,
    title: 'Player detail',
  },

  {
  path: 'clans',
  component: ClansListComponent,
  title: 'Clans page',
},
{
  path: 'clans/new',
  component: ClansNew,
  title: 'New Clan',
},
{
  path: 'clans/:id',
  component: ClanDetailComponent,
  title: 'Clan detail',
},

];