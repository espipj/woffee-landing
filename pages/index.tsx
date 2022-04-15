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
        <div className="container mx-auto lg:px-12 sm:px-3 pb-16 space-y-6 sm:space-y-24">
          <div className="flex flex-row flex-wrap-reverse md:flex-nowrap">
            <div className="basis-full md:basis-1/3 px-2 my-4 flex flex-col justify-center space-y-6">
              <h1 className="font-sans font-bold text-6xl antialiased">
                Further than just work &amp; coffee
              </h1>
              <p className="font-sans text-xl antialiased">
                Woffee is a social app where you can find and buddy up with
                remote workers just around the corner
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
          <div className="flex flex-row flex-wrap-reverse md:flex-nowrap">
            <div className="basis-full md:basis-2/3 px-2">
              <img
                src={`${
                  process.env.BASE_URL || "/woffee-landing"
                }/undraw-cowork.svg`}
                alt="Co-working"
              />
            </div>
            <div className="basis-full md:basis-1/3 px-2 my-4 flex flex-col justify-center space-y-3 sm:space-y-6">
              <h2 className="font-sans font-bold text-4xl antialiased">
                Some Heading
              </h2>
              <p className="font-sans text-xl antialiased">
                Some description: ndustry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It
              </p>
            </div>
          </div>
          <div className="flex flex-row flex-wrap md:flex-nowrap">
            <div className="basis-full md:basis-1/2 px-2 my-4 flex flex-col justify-center space-y-3 sm:space-y-6">
              <h2 className="font-sans font-bold text-4xl antialiased">
                Some Heading
              </h2>
              <p className="font-sans text-xl antialiased">
                Some description: ndustry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It
              </p>
            </div>
            <div className="basis-full md:basis-1/2 px-2">
              <img
                src={`${
                  process.env.BASE_URL || "/woffee-landing"
                }/undraw-develop.svg`}
                alt="Co-working"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
