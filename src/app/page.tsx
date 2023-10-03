import Image from 'next/image';
import Banner from './assests/Banner.jpg';

export default function Home() {
  return (
    <main>
      <section className="h-screen relative">
        <Image className="absolute -z-50 " src={Banner} alt={'Banner'} fill />
        <h1>The Martian</h1>
      </section>
    </main>
  );
}
