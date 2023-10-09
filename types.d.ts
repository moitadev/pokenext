//todo: procurar informações sobre o uso de Type e interface

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

interface PokemonAbilities {
  ability: BaseEntry;
  is_hidden: boolean;
  slot: number;
}

interface PokemonStats {
  stat: BaseEntry;
  base_stat: number;
  effort: number;
}

interface PokemonTypes {
  type: BaseEntry;
  slot: number;
}

interface BaseEntry {
  name: string;
  url: string;
}

interface Pokecolor {
  colorIndex: number;
  id: number;
  name: string;
  color: string;
  rgb: string;
}

interface Props {
  pokemon: Pokemon;
}