import Image from 'next/image';
import Link from 'next/link';

async function getPokemon() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function getColors() {
  const res = await fetch('http://localhost:8080/api/pokemons/');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
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
          {pokemons.map((pokemon: any, index: number) => (
            <Link href="/" key={index} className="pokemon-thumb">
              <li style={{ backgroundColor: colors[index].rgb }}>
                <Image
                  src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${('00' + (index + 1)).slice(-3)}.png`}
                  alt={pokemon.name}
                  width={100}
                  height={100}
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
