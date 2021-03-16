import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchEpisodes } from "../modules/episodes/operations";
import { ReturnRandomCover } from "../utils/art/random-covers";
import { FullLayout } from "../layouts/full-layout";
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
          <div className="md:col-span-2 h-full bg-black bg-opacity-90">
            <nav>
              <header className="text-mustard">Rick & Morty Fan Site</header>
              <ul className="bg-black bg-opacity-90 h-full">
                <li>
                  <a href="#">
                    <span className="text-white">Episodes</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="text-white">Characters</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="text-white">Favorites</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="md:col-span-10">
            <h1 className="font-bold pb-2 mt-12 border-b border-gray-400">
              Episodes
            </h1>
            <div className="mt-8 grid lg:grid-cols-5 gap-10">
              {Episodes.map((ep) => (
                <div key={ep.id} className="overflow-hidden w-48">
                  <img
                    src={ReturnRandomCover()}
                    alt={ep.name}
                    className="w-5/6 sm:h-64 sm:w-48 rounded-lg object-cover"
                  />
                  <div>
                    <span className="text-white">{ep.name}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-12">
              <div>Load more</div>
            </div>
          </div>
        </div>
      </FullLayout>
    </>
  );
};
