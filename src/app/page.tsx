import Banner from './assests/Banner.jpg';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const url =
  'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80';

export default function Home() {
  return (
    <main>
      <section className="h-screen ">
        <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative">
          <div
            style={{ backgroundImage: `url(${url})` }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          ></div>
          <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft />
          </div>
          <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight />
          </div>
        </div>
      </section>
    </main>
  );
}

{
  /* <Image className="absolute -z-50 " src={Banner} alt={'Banner'} fill />
<h1>The Martian</h1> */
}
