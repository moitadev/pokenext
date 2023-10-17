'use client';

import Image from 'next/image';
import { useState } from 'react';
import PokemonAbilities from '@/components/PokemonAbilites/pokemonabilities';
import PokemonTypes from '@/components/PokemonTypes/pokemontypes';
import PokemonDetails from '@/components/PokemonDetails/pokemondetails';
import PokemonStats from '@/components/PokemonStats/pokemonstats';
import Tab from '@/components/Tab/tab';
import Link from 'next/link';
import { usePokemonData } from '@/components/usePokemonData/usepokemondata';
import BackArrow from '@/components/BackArrow/backarrow';

export default function Page({ params }: { params: { id: number } }) {
  const { pokemon, colors, loading } = usePokemonData(params.id);
  const [selectedTab, setSelectedTab] = useState('abilities');

  const handleTabClick = (detail: string) => {
    setSelectedTab(detail);
  };

  return (
    <div className="container-sm">
      {loading ? (
        <p>Loading pokemon informations...</p>
      ) : (
        pokemon &&
        colors && (
          <>
            <div className="row">
              <div className="detail-view-header">
                <div className="back-arrow">
                  <Link href="/"><BackArrow /></Link>
                </div>
                <div className="poke-title">
                  <h2>{pokemon.name}</h2>
                  <small>{('00' + pokemon.id).slice(-3)}</small>
                </div>
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
                {selectedTab === 'abilities' && (
                  <PokemonAbilities pokemon={pokemon} />
                )}
                {selectedTab === 'types' && <PokemonTypes pokemon={pokemon} />}
                {selectedTab === 'details' && (
                  <PokemonDetails pokemon={pokemon} />
                )}
                {selectedTab === 'stats' && <PokemonStats pokemon={pokemon} />}
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
}
