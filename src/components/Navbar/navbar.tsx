import '@/style/style.scss';
import Link from 'next/link';
import SearchBar from '../SearchBar/searchbar';

interface SearchBarProps {
  searchPokemon: () => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const Navbar: React.FC<SearchBarProps> = ({
  searchPokemon,
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <nav className="container">
      <div className="row">
        <Link href="/">
          <h1 className="logo">PokéNext</h1>
        </Link>
      </div>
      <div className="row">
        <p>
          Search for a Pokémon by name or using its National Pokédex number.
        </p>
      </div>
      <SearchBar
        searchPokemon={searchPokemon}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </nav>
  );
};

export default Navbar;
