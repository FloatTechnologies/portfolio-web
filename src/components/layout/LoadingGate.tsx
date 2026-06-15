"use client";

import { useEffect, useState } from "react";
import { SiteLoader } from "./SiteLoader";

export function LoadingGate({ children }: { children: React.ReactNode }) {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (entered) {
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [entered]);

  return (
    <>
      {!entered ? <SiteLoader onEnter={() => setEntered(true)} /> : null}
      <div
        className={
          entered
            ? "main-entered"
            : "pointer-events-none opacity-0"
        }
      >
        {children}
      </div>
    </>
  );
}
