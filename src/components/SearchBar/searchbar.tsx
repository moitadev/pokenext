import MagnifyingGlass from "../MagnifyingGlass/magnifyingglass";

interface SearchBarProps {
  searchPokemon: () => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchPokemon,
  searchTerm,
  setSearchTerm,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchTerm(newValue);
    searchPokemon()
  };
  return (
    <div className="row">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Name or number"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button onClick={searchPokemon}>
          <MagnifyingGlass />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
