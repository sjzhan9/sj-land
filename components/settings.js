import styles from "../components/settings.module.css";
import React, { useEffect } from "react";
import util from "../styles/util.module.css";
import * as Popover from "@radix-ui/react-popover";
import * as Checkbox from "@radix-ui/react-checkbox";

export default function Settings({ status, updateCheckbox }) {
  const handleChange = () => {
    updateCheckbox(!status);
  };

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.6666 6H5.33331L10.6666 12.3067V16.6667L13.3333 18V12.3067L18.6666 6Z"
              stroke="#828282"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </Popover.Trigger>
      <Popover.Anchor />
      <Popover.Content
        className={util.popover}
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <Checkbox.Root
          checked={status}
          onCheckedChange={handleChange}
          id="fav-only"
          className={util.checkbox}
        >
          <Checkbox.Indicator asChild>
            <svg
              width="13"
              height="10"
              viewBox="0 0 13 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5L4.5 8.5L11.5 1.5"
                stroke="#7D7D7D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label htmlFor="fav-only">Show favorites only</label>
        <Popover.Arrow className={util.arrow} />
      </Popover.Content>
    </Popover.Root>
  );
}
