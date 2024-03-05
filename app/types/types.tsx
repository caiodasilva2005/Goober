export interface Location {
  id: number;
  name: string;
  Xpos: number;
  Ypos: number;
  occupied?: Car;
}

export interface Car {
  id: number;
  selectedLocation?: Location;
  selected: boolean;
  error?: boolean;
}
