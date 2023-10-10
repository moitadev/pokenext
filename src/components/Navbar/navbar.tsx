import '@/style/style.scss';
import Link from 'next/link';

export default function Navbar() {
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
    </nav>
  );
}
