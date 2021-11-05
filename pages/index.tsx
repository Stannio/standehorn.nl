import type { NextPage } from "next";
import Navbar from "../components/navigation/Navbar";
import Image from "next/image";
import StanImage from "../public/img/stan.jpg";
import Tags from "../components/Tags";
import DarkModeToggle from "../components/theme/DarkModeToggle";

const Home: NextPage = () => {
  return (
    <div className='h-screen'>
      <Navbar />
      <div className='container px-1 mx-auto h-4/6'>
        <div className='grid h-full grid-cols-6'>
          <div className='col-span-6 lg:col-span-3 xl:col-span-2 xl:col-start-2 place-self-center'>
            <h1 className='font-mono text-6xl font-semibold leading-tight text-black dark:text-white'>
              Full-stack developer
            </h1>
            <p className='my-6 font-mono text-xl leading-tight text-black dark:text-white'>
              I&#39;m a full-stack developer with a passion for building
              applications.
            </p>
            <Tags />
          </div>
          <div className='col-span-6 lg:col-span-2 xl:col-span-1 place-self-center'>
            <div className='w-64 h-auto'>
              <Image
                src={StanImage}
                className='rounded-full shadow-lg'
                placeholder='blur'
                alt='Stan'
                layout='responsive'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
