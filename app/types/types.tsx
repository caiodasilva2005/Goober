export interface Location {
  id: number;
  name: string;
  Xpos: number;
  Ypos: number;
  occupied: boolean;
}

export interface Car {
  id: number;
  selectedLocation?: Location;
  selected: boolean;
}
