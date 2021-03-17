import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchEpisodes } from "../modules/episodes/operations";
import { ReturnRandomCover } from "../utils/art/random-covers";
import { FullLayout } from "../layouts/full-layout";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { EpisodeCard } from "../components/EpisodeCard";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },
}));

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
            <nav>
              <header className="text-mustard text-xl bg-greese bg-opacity-75 py-6 flex justify-center justify-items-center">
                Rick & Morty Fan Site
              </header>
              <ul className="mt-8 px-4 h-full text-center">
                <li className="mb-12 w-full">
                  <div className="hover:bg-mustard rounded flex justify-center text-white hover:text-gray-300">
                    <a href="#" className="my-2">
                      <span className="text-xl">Episodes</span>
                    </a>
                  </div>
                </li>
                <li className="mb-12 w-full">
                  <div className="hover:bg-mustard rounded flex justify-center text-white hover:text-gray-300">
                    <a href="#" className="my-2">
                      <span className="text-white text-xl">Characters</span>
                    </a>
                  </div>
                </li>
                <li className="mb-12 w-full">
                  <div className="hover:bg-mustard rounded flex justify-center text-white hover:text-gray-300">
                    <a href="#">
                      <span className="text-white text-xl">Favorites</span>
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div className="md:col-span-10">
            <div className="flex justify-center">
              <h1 className="font-bold pb-2 mt-12 text-white text-5xl">
                Episodes
              </h1>
            </div>

            <div className="mt-8 grid justify-center lg:grid-cols-5 gap-10">
              {Episodes.map((ep) => (
                <EpisodeCard ep={ep} key={ep.id} />
              ))}
            </div>
            <div className="mx-auto mt-8 py-4 border-2 rounded border-mustard text-mustard hover:text-white hover:bg-mustard">
              <div className="text-center text-xl">Load more</div>
            </div>
          </div>
        </div>
      </FullLayout>
    </>
  );
};
