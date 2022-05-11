import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import util from "../styles/util.module.css";
import Background from "../components/background";
import Menu from "../components/menu";
import toast, { Toaster } from "react-hot-toast";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  id: process.env.GOOGLE_TAG,
};
TagManager.initialize(tagManagerArgs);

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" value={{ dark: "dark-theme" }}>
      <div id="outer" className={util.outer}>
        <Toaster
          toastOptions={{
            duration: 1500,
            style: {
              padding: "3px",
              borderRadius: "6px",
              fontSize: "14px",
            },
          }}
        />
        {/* <div className="noise"></div> */}
        {/* <div className="tv">
          <svg>
            <filter id="noise">
              <feTurbulence id="turbulence">
                <animate
                  attributeName="baseFrequency"
                  dur="1s"
                  values="0.9 0.9; 0.8 0.8 0.9 0.9; "
                  repeatCount="indefinite"
                ></animate>
              </feTurbulence>
              <feDisplacementMap
                in="SourceGraphic"
                scale="80"
              ></feDisplacementMap>
            </filter>
          </svg>
        </div> */}
        <Background />
        <div className={util.container}>
          <h3 className={util.mobileTitle}>SJ Zhang</h3>
          <Menu />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
