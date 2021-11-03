import type { NextPage } from "next";
import Navbar from "../src/components/navigation/Navbar";
import Image from "next/image";
import StanImage from "../public/img/stan.jpg";

const Home: NextPage = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="container mx-auto h-4/6">
        <div className="grid grid-cols-6 h-full">
          <div className="col-span-2 col-start-2 place-self-center">
            <h1 className="text-black dark:text-white font-semibold text-6xl font-mono leading-tight">
              Full-stack developer
            </h1>
          </div>
          <div className="col-span-2 place-self-center">
            <Image
              src={StanImage}
              className="rounded-full shadow-lg"
              placeholder="blur"
              alt="Stan"
              height={1080}
              width={1080}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
