const PokemonStats: React.FC<Props> = ({ pokemon }) => {
  return (
    <div className="stats-wrapper">
      {pokemon.stats.map((pokemonStats, index: number) => (
        <div className="stats" key={index}>
          <span className="stats-name">{pokemonStats.stat.name}</span>
          <span className="stats-number">{pokemonStats.base_stat}</span>
        </div>
      ))}
      <small>base stats</small>
    </div>
  );
};

export default PokemonStats;