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
        <div className={util.settingButton}>
          {status ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5556 5H4L10.2222 12.3578V17.4444L13.3333 19V12.3578L19.5556 5Z"
                stroke="#828282"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="18.75" cy="5.1499" r="3" fill="#7D7D7D" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5556 5H4L10.2222 12.3578V17.4444L13.3333 19V12.3578L19.5556 5Z"
                stroke="#828282"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </Popover.Trigger>
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
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
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
