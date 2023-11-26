import { useEffect, useState } from "react";

export const mediaQuery = {
  sp: "(width < 1024px)",
  pc: "(1024px <= width)",
};

export const useMediaQuery = (query: string) => {
  const [match, setMatch] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mql = window.matchMedia(query);

      setMatch(mql.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setMatch(e.matches);
      };

      mql.onchange = handleChange;

      return () => {
        mql.onchange = null;
      };
    }
  }, [query]);

  return match;
};
