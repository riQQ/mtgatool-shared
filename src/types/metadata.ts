import {
  CARD_RARITIES,
  RATINGS_MTGCSR,
  RATINGS_LOLA,
} from "../shared/constants";

export interface Metadata {
  cards: { [id: number]: DbCardData };
  ok: boolean;
  version: string;
  language: string;
  updated: number;
  events: { [id: string]: string };
  events_format: { [id: string]: string };
  sets: { [id: string]: CardSet };
  abilities: { [id: number]: string };
  limited_ranked_events: string[];
  standard_ranked_events: string[];
  single_match_events: string[];
  archetypes: {
    average: {
      mainDeck: Record<string, number | undefined>;
      sideboard: Record<string, number | undefined>;
    };
    name: string;
    format?: string;
  }[];
}

export interface DbCardData {
  id: number;
  name: string;
  titleId: number;
  set: string;
  artid: number;
  type: string;
  cost: string[];
  cmc: number;
  rarity: Rarity;
  cid: string;
  frame: number[];
  artist: string;
  dfc: number;
  collectible: boolean;
  craftable: boolean;
  booster: boolean;
  dfcId: boolean | number;
  rankSource?: -1 | typeof RATINGS_MTGCSR | typeof RATINGS_LOLA;
  rank: number;
  rank_values: string[] | number[] | number;
  rank_controversy?: number[] | number;
  images: ImageLinks;
  reprints: boolean | number[];
  isPrimary: boolean;
  side?: boolean;
  ceil?: number | null;
  source?: number;
  abilities: number[];
}

export type Rarity = typeof CARD_RARITIES[number];

interface ImageLinks {
  [key: string]: string;
}

export interface CardSet {
  collation: number | false;
  scryfall: string;
  code: string;
  arenacode: string;
  tile: number;
  release: string;
  svg?: string;
}

export interface RewardsDate {
  daily: string;
  weekly: string;
}

export interface Format {
  name: string;
  sets: string[];
  bannedTitleIds: number[];
  suspendedTitleIds: number[];
  allowedTitleIds: number[];
  cardCountRestriction: string;
}
