import type { NextPage } from "next";
import Head from "next/head";
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
        <meta name="theme-color" content="#3794FC"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar />
        <div className="container mx-auto md:px-12 flex flex-row flex-wrap-reverse md:flex-nowrap">
          <div className="basis-full md:basis-1/3 px-2 flex flex-col justify-center space-y-6">
            <h1 className="font-sans font-bold text-6xl antialiased">
              Further than just work &amp; coffee
            </h1>
            <p className="font-sans text-xl antialiased">
              Woffee is a social app where you can find and buddy up with remote
              workers just around the corner
            </p>
            <SignUp />
          </div>
          <div className="basis-full md:basis-2/3 px-2">
            <img
              src={`${
                process.env.BASE_URL || "/woffee-landing"
              }/woffee-illus.svg`}
              alt="Co-working"
            />
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
