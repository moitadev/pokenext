import Image from 'next/image';

interface Pokeman {
  id: number;
  name: string;
}

async function getColors() {
  const res = await fetch('http://localhost:8080/api/pokemons/');

  if (!res.ok) {
    throw new Error('Failed to fetch colors');
  }

  return res.json();
}

export default async function Page({ params }: { params: { id: number } }) {
  const pokemon = (await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.id}`
  ).then((res) => {
    return res.json();
  })) as Pokeman;
  const colors = await getColors();
  const colorIndex = params.id - 1;
  return (
    <div className="container">
      <div className="row">
        <div className="poke-title">
          <h2>{pokemon.name}</h2>
          <small>{('00' + pokemon.id).slice(-3)}</small>
        </div>
        <div
          className="poke-image"
          style={{ backgroundColor: colors[colorIndex].rgb }}
        >
          <Image
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${(
              '00' + params.id
            ).slice(-3)}.png`}
            alt={pokemon.name}
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
