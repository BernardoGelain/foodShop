import { useEffect, useState } from "react";

export function useWindowWidth() {
  const [width, setWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return width;
}
