import Cal, { getCalApi } from "@calcom/embed-react";
import React, { useEffect } from "react";
import util from "../styles/util.module.css";

export default function MyCal() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", { styles: { branding: { brandColor: "#000000" } } });
    })();
  }, []);
  return (
    <button
      data-cal-link="sjzhang/15min"
      className={
        util.singleButton + " " + util.button + " " + util.iconButtonText
      }
    >
      Book a time
    </button>
  );
}
