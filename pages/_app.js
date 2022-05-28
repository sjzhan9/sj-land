import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import util from "../styles/util.module.css";
import Background from "../components/background";
import Menu from "../components/menu";
import toast, { Toaster } from "react-hot-toast";
import React, { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
      value={{ dark: "dark-theme" }}
      // className={util.outer}
    >
      {/* <div id="outer" className={util.outer}> */}
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
      <Background />
      {/* <div className={util.container}> */}
      <h3 className={util.mobileTitle}>SJ Zhang</h3>
      <Menu />
      <Component {...pageProps} />
      {/* </div> */}
      {/* </div> */}
    </ThemeProvider>
  );
}

export default MyApp;
