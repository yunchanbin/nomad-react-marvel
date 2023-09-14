import { useEffect, useState } from "react";
import Character from "../components/Character";

function Home() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const getCharacters = async () => {
    const json = await (
      await fetch(
        "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023"
      )
    ).json();

    // console.log(json.data.results[1]);
    // console.log(json.data.results[3].thumbnail);
    setCharacters(json.data.results);
    setLoading(false);
  };

  useEffect(() => {
    getCharacters();
  }, []);
  // setLoading(true);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <ul>
            {characters.map((character, index) => (
              <li key={index}>
                <Character
                  id={character.id}
                  key={character.id}
                  name={character.name}
                  img={character.thumbnail}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Home;
