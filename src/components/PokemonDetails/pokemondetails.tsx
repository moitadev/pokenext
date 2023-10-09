const PokemonDetails: React.FC<Props> = ({ pokemon }) => {
  return (
    <div className="details-wrapper">
      <div className="details">
        <span className="detail-name">Height</span>
        <span className="detail-number">{pokemon.height}</span>
      </div>
      <div className="details">
        <span className="detail-name">Weight</span>
        <span className="detail-number">{pokemon.weight}</span>
      </div>
      <div className="details">
        <span className="detail-name">Base Experience</span>
        <span className="detail-number">{pokemon.base_experience}</span>
      </div>
    </div>
  );
};

export default PokemonDetails;