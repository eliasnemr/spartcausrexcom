import React from "react";
import DownloadWhitePaper from "../assets/minima_whitepaper.pdf";

const Home = () => {
  return (
    <div className="text-black">
      <p className="mb-4">
        I am a coder. Have been for 40 years now.. still sharp as razor.. but
        getting old.{" "}
      </p>
      <p className="mb-4">
        Started in games (as many of us did back then) using Borland C++..
        physics engines, 3D rendering, consoles, bitmap graphics.. etc. etc..
      </p>
      <p className="mb-4">
        Since then I have worked in almost every field.. web, php, javascript,
        mysql, telephony, apache, linux servers, perl, java.. and all the other
        good stuff.
      </p>
      <p className="mb-4">
        After a while - all the languages blur into one. Each suited to a
        different task - but for the last 20 years I have been mostly a Java
        man.
      </p>
      <p className="mb-4">
        Fell down the Bitcoin rabbit hole 10 years ago, in 2012, and have been
        falling ever since.
      </p>
      <p className="mb-4">
        My current <span className="italic">obsession</span> is{" "}
        <span className="text-bold">Minima.</span>
      </p>
      <p className="mb-4">
        {" "}
        The main Minima website is at{" "}
        <a
          className="hover:cursor-pointer hover:text-blue-300 hover:underline text-blue-500"
          href="https://minima.global"
          target="_blank"
        >
          https://minima.global
        </a>
      </p>
      <p className="mb-4">
        Minima strives to be a truly decentralised crypto-currency where every
        single user runs the complete application in full.
      </p>
      <p className="mb-2">
        Download the{" "}
        <a
          className="hover:cursor-pointer hover:text-blue-300 hover:underline text-blue-500"
          href={DownloadWhitePaper}
          download
        >
          White Paper
        </a>
      </p>
      <p className="mb-2">
        The complete code base can be found at:
        <br /> <br />
        <a
          className="hover:cursor-pointer hover:text-blue-300 hover:underline text-blue-500"
          href="https://github.com/minima-global/Minima"
          target="_blank"
        >
          https://github.com/minima-global/Minima
        </a>
      </p>
      <p className="mb-2">
        On this website you will find the jar, Android APK and a selection of
        archive files to resync your node.
      </p>
      <p className="mt-6">Enjoy!</p>
    </div>
  );
};

export default Home;
