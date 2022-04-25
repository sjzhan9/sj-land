import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import util from "../styles/util.module.css";
import Background from "../components/background";
import Menu from "../components/menu";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" value={{ dark: "dark-theme" }}>
      <div id="outer" className={util.outer}>
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
          <Menu />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
