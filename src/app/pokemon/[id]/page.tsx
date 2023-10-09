import Image from 'next/image';

async function getColors() {
  const res = await fetch('http://localhost:3000/api/pokecolors');

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
    <div className="container-sm">
      <div className="row">
        <div className="poke-title">
          <h2>{pokemon.name}</h2>
          <small>{('00' + pokemon.id).slice(-3)}</small>
        </div>
      </div>
      <div className="row">
        <div
          className="poke-image"
          style={{ backgroundColor: colors[colorIndex].rgb }}
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
            {pokemon.abilities.map((pokemonAbilities: any, index: number) => (
              <p className="ability-name" key={index}>
                {pokemonAbilities.ability.name}
              </p>
            ))}
          </div>
          
          <div className="type-wrapper">
            {pokemon.types.map((pokemonType: any, index: number) => (
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
          </div>

          <div className="stats-wrapper" data-detail="stats">
            {pokemon.stats.map((pokemonStats: any, index: number) => (
              <div className="stats" key={index}>
                <span className="stats-name">{pokemonStats.stat.name}</span>
                <span className="stats-number">{pokemonStats.base_stat}</span>
              </div>
            ))}
            <small>base stats</small>
          </div>
        </div>
      </div>
    </div>
  );
}
