import { useEffect, useState } from "react";
import { getCharacters } from "./services";
import type { ItemGetCharacters } from "./interfaces";
import { CharacterCard } from "./components/CharacterCard";

function App() {
  const [dragonBall, setDragonBall] = useState<ItemGetCharacters[] | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    getCharacters()
      .then((data) => {
        if (data !== null) {
          setDragonBall(data?.items);
        } else {
          setError(true);
        }
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <main className="bg-image-main min-h-screen bg-cover bg-center bg-no-repeat ">
      <h1 className="text-3xl font-bold text-center my-2">Dragon Ball Info</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>error</p>
      ) : (
        <section className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4 p-2 w-[1000px] mx-auto">
          {dragonBall &&
            dragonBall.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
        </section>
      )}
    </main>
  );
}

export default App;
