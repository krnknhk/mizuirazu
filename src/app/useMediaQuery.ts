import { useEffect } from "react";

export const mediaQuery = {
  sp: "width < 1024px",
  pc: "1024px <= width",
};

export const useMediaQuery = (query: string) => {
  const formattedQuery = `(${query})`;
  let match = matchMedia(formattedQuery).matches;

  useEffect(() => {
    const mql = matchMedia(formattedQuery);

    if (mql.media === "not all" || mql.media === "invalid") {
      console.error(`useMediaQuery Error: Invalid media query`);
    }

    const handleChange = (e: MediaQueryListEvent) => {
      match = e.matches;
    };

    mql.onchange = handleChange;

    return () => {
      mql.onchange = null;
    };
  }, [formattedQuery]);

  return match;
};
