export interface ServerResponse {
  info: IPagination;
  results: ICharecter[];
}

export interface IPagination {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface ICharecter {
  id: number;
  name: string;
  status: EStatus;
  species: string;
  type: string;
  gender: EGender;
  origin: IOrigin;
  location: ILocation;
  image: string;
  episode: string[];
  url: Location;
  created: Date;
}

export enum EGender {
  Female = "Female",
  Male = "Male",
  Genderless = "genderless",
  Unknown = "unknown",
}

export interface ILocation {
  name: string;
  url: Location;
}

export enum EStatus {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}

export interface ISearch {
  name?: string;
  status?: EStatus;
  species?: string;
  type?: string;
  gender?: EGender;
  page?: number;
}

export interface IOrigin {
  name: string;
  url: Location;
}
