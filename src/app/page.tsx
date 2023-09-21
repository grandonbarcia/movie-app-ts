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
}
