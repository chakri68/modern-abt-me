import { useEffect, useRef, useState } from "react";

export function useStagger<T>(value: T, duration = 300) {
  const prev = useRef<T>(value);
  const [shouldStagger, setShouldStagger] = useState(false);

  useEffect(() => {
    if (prev.current !== value) {
      setShouldStagger(true);

      const timeout = setTimeout(() => {
        setShouldStagger(false);
      }, duration);

      prev.current = value;

      return () => clearTimeout(timeout);
    }
  }, [value, duration]);

  return shouldStagger;
}
