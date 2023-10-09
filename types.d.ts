interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  types: PokemonTypes[];
  stats: PokemonStats[];
  abilities: PokemonAbilities[];
};

type PokemonAbilities = {
  ability: ResourceBaseInfo;
  is_hidden: boolean;
  slot: number;
}

type PokemonStats = {
  stat: ResourceBaseInfo;
  base_stat: number;
  effort: number;
}

type PokemonTypes = {
  type: ResourceBaseInfo;
  slot: number;
}

type ResourceBaseInfo = {
  name: string;
  url: string;
}

type Pokecolor = {
  colorIndex: number;
  id: number;
  name: string;
  color: string;
  rgb: string;
}