export interface UserInterface {
  id: number;
  name: string;
  totalMiles: number;
  milesPerMonth: MilesPerMonth[];
  awards?: JSX.Element;
  adult: boolean;
  nickname?: string;
  color: string;
}

interface MilesPerMonth {
  month: string,
  total: number,
}