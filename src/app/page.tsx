<<<<<<< HEAD
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
=======
import axios from 'axios';

export default function Home() {
  async function fetchData() {
    const url =
      'https://api.themoviedb.org/3/movie/550?api_key=503fc4d0a2e0cb386a656081a11f9b66';

    const data = await axios(url);

    console.log(data);
  }

  fetchData();

  return <main>Hello Worlds</main>;
>>>>>>> ec66d97a93e2b94f62be041d02322501a8c915b0
}
