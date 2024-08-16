import type { ReponseGetCharacters } from "../interfaces";

export const getCharacters = async () => {
  try {
    const response = await fetch("https://dragonball-api.com/api/characters");
    const data: ReponseGetCharacters = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
