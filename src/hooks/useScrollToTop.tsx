import { useEffect } from "react";

export const useScrollToTop = (): void => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};
