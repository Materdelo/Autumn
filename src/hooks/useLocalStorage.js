import { useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [storedValue, setStoredValue] = useState(() => {
    const storedItem = localStorage.getItem(key);
    return storedItem !== null ? JSON.parse(storedItem) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
