'use client';

import Navbar from '@/components/Navbar/navbar';
import PokemonsCard from '@/components/PokemonsCard/pokemonscard';
import usePokemons from '@/components/usePokemons/usepokemons';

export default function Home() {
  const { pokemons, colors, loading, searchResults, searchPokemon, searchTerm, setSearchTerm } = usePokemons();

  return (
    <>
      <Navbar
        searchPokemon={searchPokemon}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div className="container">
        <div className="row">
          <ul className="pokemon-list">
            {loading ? (
              <small className="loading">
                Wait while we look for the pokémons in the bushes...
              </small>
            ) : (
              pokemons &&
              colors &&
              searchResults && (
                <>
                  {searchResults.length > 0 ? (
                    searchResults.map((pokemon) => (
                      <PokemonsCard
                        key={pokemon.id}
                        pokemon={pokemon}
                        colors={colors}
                      />
                    ))
                  ) : (
                    <small className="loading">
                      Oh no! The wild pokémon that you were looking for fled.
                    </small>
                  )}
                </>
              )
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
