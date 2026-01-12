export enum Tab {
  HOME = 'HOME',
  COUPLE = 'COUPLE',
  EVENT = 'EVENT',
  LOCATION = 'LOCATION',
  WISHES = 'WISHES'
}

export interface Guest {
  name: string;
}

export interface Wish {
  id: string;
  name: string;
  message: string;
  timestamp: string;
}

export interface EventDetail {
  title: string;
  date: string;
  time: string;
  location: string;
  address: string;
  googleMapsUrl?: string;
  entertainment?: string;
}