import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchEpisodes } from "../modules/episodes/operations";
import { FullLayout } from "../layouts/full-layout";
import { EpisodeCard } from "../components/EpisodeCard";
import { Nav } from "../components/Nav";

export const HomePage = (props) => {
  const dispatch = useDispatch();
  const Episodes = useSelector((state) => state.episodes.episode_list);
  useEffect(() => {
    dispatch(FetchEpisodes());
  }, []);

  return (
    <>
      <FullLayout>
        <div className="grid md:grid-cols-12 ">
          <div className="md:col-span-2 h-full bg-black bg-opacity-75">
            <Nav />
          </div>
          <div className="md:col-span-10">
            <div className="flex justify-start pl-4">
              <h1 className="font-bold pb-2 mt-12 text-white text-5xl">
                Episodes
              </h1>
            </div>

            <div className="mt-8 grid justify-center lg:grid-cols-5 gap-10">
              {Episodes.map((ep) => (
                <EpisodeCard ep={ep} key={ep.id} />
              ))}
            </div>
            <div className="mx-auto mt-8 py-4 border-2 rounded-full border-mustard text-mustard hover:text-white hover:bg-mustard">
              <div className="text-center text-xl">Load more</div>
            </div>
          </div>
        </div>
      </FullLayout>
    </>
  );
};
