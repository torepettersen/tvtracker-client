export interface Show {
  id: number;
  tvmazeId: number
  name: string;
  nextEpisode?: Episode;
  previousEpisode?: Episode;
  image: {
    medium: string;
  };
}

export interface Episode {
  airdate: string;
  airstamp: string;
  name: string;
  season: number;
  number: number;
  url: string;
}
