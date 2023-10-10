export default async function getColors() {
  const res = await fetch('http://localhost:3000/api/pokecolors');

  if (!res.ok) {
    throw new Error('Failed to fetch colors');
  }

  return res.json();
}
