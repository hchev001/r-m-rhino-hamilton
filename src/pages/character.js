import { FullLayout } from "../layouts/full-layout";
import { Nav } from "../components/Nav";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchTVCharacters } from "../modules/character/operations";
import { CharacterCard } from "../components/CharacterCard";

export const CharacterPage = (props) => {
  // dispatch and useSelector allow me to access and manipulate the global store
  const dispatch = useDispatch();
  const Characters = useSelector((state) => state.characters.character_list);
  useEffect(() => {
    dispatch(FetchTVCharacters());
  }, []);

  return (
    <FullLayout>
      <div className="grid md:grid-cols-12 h-full">
        <div className="md:col-span-2 h-full bg-black bg-opacity-75">
          <Nav />
        </div>
        <div className="md:col-span-10">
          <div className="flex justify-start pl-4">
            <h1 className="font-bold pb-2 mt-12 text-white text-5xl">
              Characters
            </h1>
          </div>

          <div className="mt-8 grid justify-center lg:grid-cols-5 gap-10">
            {Characters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
        </div>
      </div>
    </FullLayout>
  );
};
