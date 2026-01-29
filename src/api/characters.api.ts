import { Character } from "../types/character";

export async function fetchCharacters(): Promise<Character[]> {
  const res = await fetch("http://localhost:3001/characters");
  return res.json();
}
