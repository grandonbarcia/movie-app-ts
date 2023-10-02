import './globals.css';
import type { Metadata } from 'next';
import NavBar from './NavBar';
import Footer from './Footer';

export const metadata: Metadata = {
  title: 'IMDB Clone',
  description:
    'IMDB Clone to show off my incredible Front-End skills so I can get hired and eat and live and breath and all that good stuff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
