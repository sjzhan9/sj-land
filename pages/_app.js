import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import util from "../styles/util.module.css";
import Background from "../components/background";
import Menu from "../components/menu";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" value={{ dark: "dark-theme" }}>
      <div className={util.outer}>
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
