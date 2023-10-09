import Image from 'next/image';
import Link from 'next/link';

interface Pokeman {
  id: number;
  name: string;
}

async function getPokemon() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');

  if (!res.ok) {
    throw new Error('Failed to fetch pokemons');
  }

  return res.json();
}

async function getColors() {
  const res = await fetch('http://localhost:3000/api/pokecolors');

  if (!res.ok) {
    throw new Error('Failed to fetch colors');
  }

  return res.json();
}

export default async function Home() {
  const data = await getPokemon();
  const pokemons = data.results;
  const colors = await getColors();
  return (
    <div className="container">
      <div className="row">
        <ul className="pokemon-list">
          {pokemons.map((pokemon: Pokecolor, index: number) => (
            <Link href={`/pokemon/${(index + 1)}`} key={index} className="pokemon-thumb" style={{ backgroundColor: colors[index].rgb }}>
              <li>
                <Image
                  src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${('00' + (index + 1)).slice(-3)}.png`}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                  loading='lazy'
                />
                <h4>{pokemon.name}</h4>
                <small>{('00' + (index + 1)).slice(-3)}</small>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}