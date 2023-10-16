import React from "react";
import DownloadJAR from "../assets/download/minima.jar";
import DownloadAPK from "../assets/download/minima-1.0.37.apk";
import DownloadWhitePaper from "../assets/minima_whitepaper.pdf";
const Downloads = () => {
  return (
    <>
      <div className="bg-slate-200 rounded-lg p-4 text-black">
        <h1 className="font-semibold mb-2">Downloads</h1>

        <div className="bg-white p-4 rounded-lg">
          <h1 className="text-sm font-semibold">Latest Minima codebase</h1>
          <p>
            <a
              className="hover:cursor-pointer hover:text-blue-300 hover:underline text-blue-500"
              href="https://github.com/minima-global/Minima"
              target="_blank"
            >
              Github
            </a>
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg mt-2">
          <h1 className="text-sm font-semibold">Latest jar</h1>
          <p>
            <a
              className="hover:cursor-pointer hover:text-blue-300 hover:underline text-blue-500"
              href={DownloadJAR}
              download
            >
              minima.jar
            </a>
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg mt-2">
          <h1 className="text-sm font-semibold">Latest signed APK</h1>
          <p>
            <a
              className="hover:cursor-pointer hover:text-blue-300 hover:underline text-blue-500"
              href={DownloadAPK}
              download
            >
              minima-1.0.37.apk
            </a>
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg mt-2">
          <h1 className="text-sm font-semibold">White paper</h1>
          <p>
            <a
              className="hover:cursor-pointer hover:text-blue-300 hover:underline text-blue-500"
              href={DownloadWhitePaper}
              download
            >
              Minima White Paper
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Downloads;
