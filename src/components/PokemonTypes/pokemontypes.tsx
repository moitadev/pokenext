const PokemonTypes: React.FC<Props> = ({ pokemon }) => {
  return (
    <div className="type-wrapper">
      {pokemon.types.map((pokemonType, index: number) => (
        <p className="type-name" key={index}>
          {pokemonType.type.name}
        </p>
      ))}
    </div>
  );
};

export default PokemonTypes;
