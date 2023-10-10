export default async function getColors() {
  const res = await fetch(`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/pokecolors`);

  if (!res.ok) {
    throw new Error('Failed to fetch colors');
  }

  return res.json();
}
