import type { NextPage } from "next";
import Head from "next/head";
import AppDownload from "../components/AppDownload";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SignUp from "../components/SignUp";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Woffee</title>
        <meta
          name="description"
          content="Woffee is a social app where you can find and buddy up with remote
              workers just around the corner"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar />
        <div className="container mx-auto md:px-12 flex flex-row">
          <span className="sm:basis-1/3 px-2 flex flex-col justify-center space-y-6">
            <h1 className="font-sans font-bold text-6xl antialiased">
              Further than just work &amp; coffee
            </h1>
            <p className="font-sans text-xl antialiased">
              Woffee is a social app where you can find and buddy up with remote
              workers just around the corner
            </p>
            <SignUp />
          </span>
          <div className="sm:basis-2/3 px-2">
            <img src="/woffee-illus.svg" alt="Co-working" />
          </div>
        </div>
        <div className="container mx-auto">
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>
            Some stuffSome stuffSome stuffSome stuffSome stuffSome stuffSome
            stuffSome stuffSome stuffSome stuffSome stuffSome stuffSome
            stuffSome stuffSome stuffSome stuffSome stuffSome stuffSome
            stuffSome stuffSome stuffSome stuffSome stuff
          </p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
