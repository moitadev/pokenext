import { useEffect, useState } from 'react';

async function getColors() {
  const res = await fetch('http://localhost:3000/api/pokecolors');

  if (!res.ok) {
    throw new Error('Failed to fetch colors');
  }

  return res.json();
}

export function usePokemonData(id: number) {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [colors, setColors] = useState<Pokecolor[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemon() {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const pokemonData = await res.json();
      const resColors = await getColors();

      if (!res.ok) {
        throw new Error('Failed to fetch Pokemon data');
      }

      setColors(resColors);
      setPokemon(pokemonData);
      setLoading(false);
    }

    fetchPokemon();
  }, [id]);

  return { pokemon, colors, loading };
}
