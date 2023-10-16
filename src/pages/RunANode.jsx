import React from "react";
import { Link } from "react-router-dom";
import MinimaJNLP from "../assets/minima.jnlp";
import JWSLaunch from "../assets/jws-launch-button.png";

const RunANode = () => {
  return (
    <>
      <div className="bg-slate-200 rounded-lg p-4 text-black">
        <h1 className="font-semibold mb-2">Prerequisites</h1>
        <p className="mb-1">
          When you first run Minima, the first thing you need is to add some
          peers. You can get this list from any user on the network.
        </p>

        <p>I publish a list which you can copy directly into the app..</p>
        <a
          className="hover:cursor-pointer hover:text-blue-300 hover:underline text-blue-500"
          href="https://spartacusrex.com/minimapeers.txt"
          target="_blank"
        >
          https://spartacusrex.com/minimapeers.txt
        </a>
      </div>
      <div className="bg-slate-200 rounded-lg p-4 text-black mt-4">
        <h1 className="font-semibold mb-2">Command line</h1>
        <p className="mb-1">At it's core Minima is a Java application.</p>
        <p className="mb-4">
          So on a server or cli the easiest way to run Minima is:
        </p>
        <pre className="bg-black p-4 rounded-lg text-white mb-4 text-sm">
          java -jar minima.jar
        </pre>
        <p className="mb-2">
          If you are on an external server open port 9001 on your machine - the
          default Minima port - to get the best connection to the network.
        </p>
        <p>
          If you want to run this on a server that you log into via ssh you can
          use <b>tmux</b> so that it continues to run once you log out.
        </p>
        <p className="mt-4 text-sm">
          For more information on startup params and the MDS checkout the{" "}
          <a
            className="hover:cursor-pointer hover:text-blue-300 hover:underline text-blue-500"
            href="https://github.com/minima-global/Minima"
            target="_blank"
          >
            Github README
          </a>
          .
        </p>
      </div>
      <div className="bg-slate-200 rounded-lg p-4 text-black mt-4">
        <h1 className="font-semibold mb-2">Android</h1>
        <p className="mb-1">
          The next simplest way is to install and run the Android APK.
        </p>
        <p>This is available on the Google Playstore:</p>
        <a
          className="hover:cursor-pointer hover:text-blue-300 hover:underline text-blue-500"
          href="https://play.google.com/store/apps/details?id=com.minima.android"
          target="_blank"
        >
          <img
            className="w-[200px] h-auto"
            alt="Get it on Google Play"
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          />
        </a>
        <p className="text-sm">
          You can also find a signed APK that I provide in the{" "}
          <Link
            className="hover:cursor-pointer hover:text-blue-300 hover:underline text-blue-500"
            to="/downloads"
          >
            Downloads
          </Link>{" "}
          section.
        </p>
      </div>
      <div className="bg-slate-200 rounded-lg p-4 text-black mt-4">
        <h1 className="font-semibold mb-2">Desktop</h1>
        <p className="mb-1">
          Desktop users can launch Minima from a <b>JNLP</b> file. (Java Network
          Launch Protocol)
        </p>
        <ul>
          <li className="mt-4 grid grid-cols-[auto_1fr] gap-4">
            <span>1.</span> First install Open Web Start - the new updated
            version of Java Web Start.
          </li>
          <li className="mt-4 my-4 mb-4">
            <a
              className="hover:cursor-pointer hover:text-blue-300 hover:underline text-blue-500"
              href="https://openwebstart.com/download/"
              target="_blank"
            >
              Open Web Start
            </a>
          </li>
          <li className="mt-4 grid grid-cols-[auto_1fr] gap-4">
            <span>2.</span>
            Download the Minima JNLP file, then open/double-click it, that will
            install as an application and update automatically when you start it
            in future.
          </li>
          <li className="mt-4">
            <a href={MinimaJNLP} download>
              <img width="100" src={JWSLaunch} />
            </a>
          </li>
        </ul>

        <h3 className="font-semibold mt-4">Windows</h3>
        <p className="mb-2">
          On Windows the procedure should work almost seamlessly. The JNLP will
          be opened automatically by Open Web Start.
        </p>
        <p className="text-sm">
          Note - if it doesn't open automatically then right click on the file
          and choose "Open With" and select Open Web Start.
        </p>
        <h3 className="font-semibold mt-4">Mac</h3>
        <p className="mb-2">
          If you install OpenWebStart for all users, which requires admin rights
          and will ask for a password, the file association works so that when
          you click the JNLP file it opens it correctly with OpenWebStart and
          not Java.
        </p>
        <p className="mb-2">
          If you install just for you - the file association does not seem to
          work.. so you will need to Command+Right Click the JNLP and choose
          OpenWebStart to open the file.
        </p>
        <p>
          If you choose "Other" - you can then set it as the default option so
          the next time it does it automatically.
        </p>
      </div>
      <div className="bg-slate-200 rounded-lg p-4 text-black mt-4">
        <h1 className="font-semibold mb-2">Docker</h1>

        <p className="mb-4">
          There is also a nice docker image that you can use:
        </p>
        <pre className="bg-black p-4 rounded-lg text-white mb-4 text-sm break-all whitespace-normal">
          docker run -d -e minima_mdspassword=INSERTYOURPASSWORD -e
          minima_desktop=true -v ~/minimadocker:/home/minima/data -p
          9001-9004:9001-9004 --restart unless-stopped --name minima
          minimaglobal/minima:latest
        </pre>

        <span className="grid grid-cols-[auto_1fr] items-center">
          <p>Then you log into the MDS system via</p>
          <pre className="text-sm"> https://127.0.0.1:9003/</pre>
        </span>
      </div>
      <p className="mt-6 text-black text-center">
        For more information on how to run a node, you can visit the official
        Minima docs{" "}
        <a
          className="hover:cursor-pointer hover:text-blue-300 hover:underline text-blue-500"
          href="https://www.minima.global/run-a-node"
          target="_blank"
        >
          https://www.minima.global/run-a-node
        </a>
      </p>
    </>
  );
};

export default RunANode;
