import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    // prerender specific param route: provide the ids to prerender
    path: 'quests/:id',
    renderMode: RenderMode.Prerender,
    // return an array of parameter objects to prerender, e.g. [{ id: '1' }, { id: '2' }]
    // keep this list in sync with `QuestsService` data if you update quest ids
    getPrerenderParams: async () => {
      return [
        { id: '1' },
        { id: '2' }
      ];
    }
  },
  {
    // prerender players by id (sync with `PlayerService` demo data)
    path: 'players/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return [
        { id: '1' },
        { id: '2' },
        { id: '3' }
      ];
    }
  },
  {
    // prerender clans by id (sync with `ClansService` demo data)
    path: 'clans/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return [
        { id: '1' },
        { id: '2' }
      ];
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
