

export interface Quest {
  id: number;
  title: string;
  description: string;
  xp: number;
  completed: boolean;
  
}

export interface Clan {
  id: number;
  name: string;
  description: string;
  capacity: number;
  avatarUrl?: string;
}

export interface Player {
  id: number;
  nickname: string;
  xp: number;
  clanId: number | null;
  questIds: number[];
  avatarUrl?: string;
}