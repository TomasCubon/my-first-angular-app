export interface Clan {
  id: number;
  name: string;
  description: string;
  capacity: number;
  image?: string;
  members: number[];
}
