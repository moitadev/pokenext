import '../style/style.scss';
import Navbar from '@/components/Navbar/navbar';
import Footer from '@/components/Footer/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PokéNext',
  description: 'A Pokédex that uses nextJS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
