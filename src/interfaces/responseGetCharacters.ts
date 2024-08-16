export interface ReponseGetCharacters {
  items: ItemGetCharacters[];
  meta: Meta;
  links: Links;
}

export interface ItemGetCharacters {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: Gender;
  description: string;
  image: string;
  affiliation: Affiliation;
  deletedAt: null;
}

export enum Affiliation {
  ArmyOfFrieza = "Army of Frieza",
  Freelancer = "Freelancer",
  ZFighter = "Z Fighter",
}

export enum Gender {
  Female = "Female",
  Male = "Male",
}

export interface Links {
  first: string;
  previous: string;
  next: string;
  last: string;
}

export interface Meta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}
