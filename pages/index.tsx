import type { NextPage } from "next";
import Navbar from "../components/navigation/Navbar";
import Image from "next/image";
import StanImage from "../public/img/stan.jpg";
import Tags from "../components/Tags";
import Footer from "../components/navigation/Footer";
import cards from "../data/cards";
import Card from "../components/card/Card";

const Home: NextPage = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="container max-w-5xl px-1 mx-auto h-4/6">
        <div className="grid h-full grid-cols-6">
          <div className="col-span-6 lg:col-span-3 place-self-center">
            <h1 className="font-mono text-6xl font-semibold leading-tight text-black dark:text-white">
              Full-stack developer
            </h1>
            <p className="my-6 font-mono text-xl leading-tight text-black dark:text-white">
              I&#39;m a full-stack developer with a passion for building
              applications.
            </p>
            <Tags />
          </div>
          <div className="col-span-6 lg:col-span-3 place-self-center">
            <div className="w-64 h-auto">
              <Image
                src={StanImage}
                className="rounded-full shadow-lg"
                placeholder="blur"
                alt="Stan"
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container max-w-5xl mx-auto mb-8">
        <div className="grid grid-cols-6 gap-8">
          <div className="self-center col-span-6 px-2 prose lg:col-span-3">
            <h1 className="font-mono text-6xl font-semibold leading-tight text-black dark:text-white">
              About me
            </h1>
            <p className="my-6 font-sans font-medium text-black dark:text-white">
              I&#39;m a full-stack developer with a passion for building
              applications. I&#39;m currently working at itemlost.com
            </p>
          </div>
        </div>
      </div>
      <div className="container max-w-5xl mx-auto mb-4">
        <div className="grid grid-cols-6 gap-4 px-2">
          {cards.map((card, key) => (
            <div className="col-span-6 lg:col-span-3" key={key}>
              <Card
                title={card.title}
                description={card.description}
                tags={card.tags}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
