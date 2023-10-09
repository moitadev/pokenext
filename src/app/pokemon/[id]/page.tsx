'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import PokemonAbilities from '@/components/PokemonAbilites/pokemonabilities';
import PokemonTypes from '@/components/PokemonTypes/pokemontypes';
import PokemonDetails from '@/components/PokemonDetails/pokemondetails';
import PokemonStats from '@/components/PokemonStats/pokemonstats';
import Tab from '@/components/Tab/tab';

async function getColors() {
  const res = await fetch('http://localhost:3000/api/pokecolors');

  if (!res.ok) {
    throw new Error('Failed to fetch colors');
  }

  return res.json();
}

export default function Page({ params }: { params: { id: number } }) {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [colors, setColors] = useState<Pokecolor[]>();
  const [loading, setLoading] = useState(true);

  const [selectedTab, setselectedTab] = useState('abilities');

  const handleTabClick = (detail: string) => {
    setselectedTab(detail);
  };

  useEffect(() => {
    async function fetchPokemon() {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
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
  }, [params.id]);

  return (
    <div className="container-sm">
      {loading ? (
        <p>Loading pokemon informations...</p>
      ) : (
        pokemon &&
        colors && (
          <>
            <div className="row">
              <div className="poke-title">
                <h2>{pokemon.name}</h2>
                <small>{('00' + pokemon.id).slice(-3)}</small>
              </div>
            </div>
            <div className="row">
              <div
                className="poke-image"
                style={{ backgroundColor: colors[pokemon.id - 1].rgb }}
              >
                <Image
                  src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${(
                    '00' + params.id
                  ).slice(-3)}.png`}
                  alt={pokemon.name}
                  width={200}
                  height={200}
                  priority
                />
              </div>
            </div>
            <div className="row">
              <ul className="details-list">
                <Tab
                  label="abilities"
                  selectedTab={selectedTab}
                  handleTabClick={() => handleTabClick('abilities')}
                />
                <Tab
                  label="types"
                  selectedTab={selectedTab}
                  handleTabClick={() => handleTabClick('types')}
                />
                <Tab
                  label="details"
                  selectedTab={selectedTab}
                  handleTabClick={() => handleTabClick('details')}
                />
                <Tab
                  label="stats"
                  selectedTab={selectedTab}
                  handleTabClick={() => handleTabClick('stats')}
                />
              </ul>
            </div>
            <div className="row">
              <div className="detail-box">
                {selectedTab === "abilities" && <PokemonAbilities pokemon={pokemon} />}
                {selectedTab === "types" && <PokemonTypes pokemon={pokemon} />}
                {selectedTab === "details" && <PokemonDetails pokemon={pokemon} />}
                {selectedTab === "stats" && <PokemonStats pokemon={pokemon} />}
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
}
