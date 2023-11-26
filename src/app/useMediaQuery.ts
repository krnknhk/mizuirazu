import { useEffect, useState } from "react";

export const mediaQuery = {
  sp: "width < 1024px",
  pc: "1024px <= width",
};

export const useMediaQuery = (query: string) => {
  const formattedQuery = `(${query})`;
  const [match, setMatch] = useState(window.matchMedia(formattedQuery).matches);

  useEffect(() => {
    const mql = window.matchMedia(formattedQuery);

    if (mql.media === "not all" || mql.media === "invalid") {
      console.error(`useMediaQuery Error: Invalid media query`);
    }

    mql.onchange = (e) => {
      setMatch(e.matches);
    };

    return () => {
      mql.onchange = null;
    };
  }, [formattedQuery, setMatch]);

  return match;
};
