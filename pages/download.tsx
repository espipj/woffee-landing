import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/NavBar";
import SignUp from "../components/SignUp";

const Download: NextPage = () => {
  return (
    <div>
      {/* <Head></Head> */}
      <main>
        <NavBar />
        <div className="container mx-auto flex flex-row md:px-12">
          <img
            className="basis-1/2 px-2"
            src="/undraw-develop.svg"
            alt="Developing app"
            width={883}
            height={802}
          />
          <span className="basis-1/2 px-2 flex flex-col justify-center space-y-6">
            <h1 className="font-sans font-bold text-6xl antialiased">
              Sorry!
              <br />
              Woffee App is not available yet
            </h1>
            <h2 className="font-sans font-bold text-4xl antialiased">
              We are working extremely hard on delivering the app you&#39;re
              looking for! You have just given us extra motivation by getting to
              here.
            </h2>
            <h3 className="font-sans font-bold text-2xl antialiased">
              If you wish to receive product updates sign-up below
            </h3>
            <SignUp />
          </span>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Download;
