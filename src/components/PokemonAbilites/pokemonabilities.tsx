const PokemonAbilities: React.FC<Props> = ({ pokemon }) => {
  return (
    <div className="ability-wrapper">
      {pokemon.abilities.map((pokemonAbilities, index: number) => (
        <p className="ability-name" key={index}>
          {pokemonAbilities.ability.name}
        </p>
      ))}
    </div>
  );
};

export default PokemonAbilities;
