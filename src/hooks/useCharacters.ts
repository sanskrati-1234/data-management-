import { useEffect, useState } from "react";
import { fetchCharacters } from "../api/characters.api";
import { Character } from "../types/character";

export function useCharacters() {
  const [data, setData] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCharacters()
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  return { data, setData, loading };
}
