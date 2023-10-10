import Link from 'next/link';
import Image from 'next/image';

interface PokemonLinkProps {
  pokemon: {
    id: number;
    url: string;
    name: string;
  };
  colors: Pokecolor[];
}

export default function PokemonsCard({ pokemon, colors }: PokemonLinkProps) {
  return (
    <Link
      href={`/pokemon/${pokemon.id}`}
      key={pokemon.id}
      className="pokemon-thumb"
      style={{ backgroundColor: colors[pokemon.id - 1].rgb }}
    >
      <li>
        <Image
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${(
            '00' + pokemon.id
          ).slice(-3)}.png`}
          alt={pokemon.name}
          width={100}
          height={100}
          priority
        />
        <h4>{pokemon.name}</h4>
        <small>{('00' + pokemon.id).slice(-3)}</small>
      </li>
    </Link>
  );
}
