'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

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
  }, []);

  return (
    <div className="container-sm">
      <>
      {console.log(params.id)}
      </>
      {loading ? (
        <p>Loading pokemon informations...</p>
      ) : (
        pokemon && colors && (
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
            <div className="scroller">
              <ul className="details-list">
                <li className="details-item" data-detail="abilities">
                  Abilities
                </li>
                <li className="details-item" data-detail="types">
                  Types
                </li>
                <li className="details-item" data-detail="detail">
                  Detail
                </li>
                <li className="details-item" data-detail="stats">
                  Stats
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="detail-box">
              <div className="ability-wrapper">
                {pokemon.abilities.map((pokemonAbilities, index: number) => (
                  <p className="ability-name" key={index}>
                    {pokemonAbilities.ability.name}
                  </p>
                ))}
              </div>

              <div className="type-wrapper">
                {pokemon.types.map((pokemonType, index: number) => (
                  <p className="type-name" key={index}>
                    {pokemonType.type.name}
                  </p>
                ))}
              </div>

              <div className="details-wrapper" data-detail="stats">
                <div className="details">
                  <span className="detail-name">Height</span>
                  <span className="detail-number">{pokemon.height}</span>
                </div>
                <div className="details">
                  <span className="detail-name">Weight</span>
                  <span className="detail-number">{pokemon.weight}</span>
                </div>
                <div className="details">
                  <span className="detail-name">Base Experience</span>
                  <span className="detail-number">
                    {pokemon.base_experience}
                  </span>
                </div>
              </div>

              <div className="stats-wrapper" data-detail="stats">
                {pokemon.stats.map((pokemonStats, index: number) => (
                  <div className="stats" key={index}>
                    <span className="stats-name">{pokemonStats.stat.name}</span>
                    <span className="stats-number">
                      {pokemonStats.base_stat}
                    </span>
                  </div>
                ))}
                <small>base stats</small>
              </div>
            </div>
          </div>
        </>
        )
      )}
      <p>teste</p>
    </div>
  );
}
