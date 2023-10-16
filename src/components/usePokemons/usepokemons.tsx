import getColors from '@/components/getColors/getColors';
import { useEffect, useState } from 'react';

interface Pokeman {
  id: number;
  url: string;
  name: string;
}

export default function usePokemons() {
  const [pokemons, setPokemons] = useState<Pokeman[]>();
  const [colors, setColors] = useState<Pokecolor[]>();
  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState<Pokeman[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchPokemons() {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      const data = await res.json();
      const resColors = await getColors();

      if (!res.ok) {
        throw new Error('Failed to fetch Pokemons data');
      }

      setColors(resColors);
      setPokemons(data.results);
      setLoading(false);
      setSearchResults(
        data.results.map((pokemonInfo: Pokeman) => {
          const parts = pokemonInfo.url.split('/');
          const id = parseInt(parts[parts.length - 2], 10);
          return { ...pokemonInfo, id };
        })
      );
    }

    fetchPokemons();
  }, []);

  const searchPokemon = () => {
    if (!pokemons) {
      return;
    }
    const data = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const filteredPokemons: Pokeman[] = data.map((pokemonInfo) => {
      const parts = pokemonInfo.url.split('/');
      const id = parseInt(parts[parts.length - 2], 10);
      return { ...pokemonInfo, id };
    });

    setSearchResults(filteredPokemons);
  };


  useEffect(() => {
    searchPokemon();
  }, [searchTerm]);

  return { pokemons, colors, loading, searchResults, searchPokemon, searchTerm , setSearchTerm };
}