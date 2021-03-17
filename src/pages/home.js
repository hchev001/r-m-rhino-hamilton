import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchEpisodes } from "../modules/episodes/operations";
import { FullLayout } from "../layouts/full-layout";
import { EpisodeCard } from "../components/EpisodeCard";
import { Link } from "react-router-dom";

export const HomePage = (props) => {
  const dispatch = useDispatch();
  const Episodes = useSelector((state) => state.episodes.episode_list);
  useEffect(() => {
    dispatch(FetchEpisodes());
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <FullLayout>
        <div className="grid md:grid-cols-12 ">
          <div className="md:col-span-2 h-full bg-black bg-opacity-75">
            <nav>
              <div className="flex justify-between">
                <header className="text-mustard text-xl bg-greese bg-opacity-75 py-6 pl-4 flex-grow">
                  Rick & Morty Fan Site
                </header>
                <div
                  className="pr-4 cursor-pointer md:hidden bg-greese bg-opacity-75 py-6"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <svg
                    className="w-6 h-6 stroke-current text-mustard"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </div>
              </div>

              <ul
                className={`mt-8 px-4 h-full text-center ${
                  isMenuOpen ? "block" : "hidden"
                } md:block`}
              >
                <li className="mb-12 w-full">
                  <div className="hover:bg-mustard rounded flex justify-center text-white hover:text-gray-300 items-center">
                    <svg
                      id="pc-monitor"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      className="w-4 h-4"
                    >
                      <path
                        id="Path_87"
                        data-name="Path 87"
                        d="M15,0H1A.945.945,0,0,0,0,1V12a.945.945,0,0,0,1,1H6v1H3v2H13V14H10V13h5a.945.945,0,0,0,1-1V1A.945.945,0,0,0,15,0ZM14,11H2V2H14Z"
                        fill="#e3ae00"
                      />
                    </svg>

                    <Link to="/episodes" className="my-2 ml-2">
                      <span className="text-xl">Episodes</span>
                    </Link>
                  </div>
                </li>
                <li className="mb-12 w-full">
                  <div className="hover:bg-mustard rounded flex justify-center text-white hover:text-gray-300 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="16"
                      viewBox="0 0 14 16"
                      className="w-4 h-4 stroke-current text-green-600"
                    >
                      <g id="personal-trainer" transform="translate(-1)">
                        <circle
                          id="Ellipse_3"
                          data-name="Ellipse 3"
                          cx="2.5"
                          cy="2.5"
                          r="2.5"
                          transform="translate(5.5)"
                          fill="#fff"
                        />
                        <path
                          id="Path_88"
                          data-name="Path 88"
                          d="M14.651,9.241l-3.5-3A1,1,0,0,0,10.5,6h-5a1,1,0,0,0-.651.241l-3.5,3a1,1,0,0,0-.056,1.466L4,13.414V10.586l-.529-.529L5,8.746V15a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V8.746l1.529,1.311L12,10.586v2.828l2.707-2.707a1,1,0,0,0-.056-1.466Z"
                          fill="#fff"
                        />
                      </g>
                    </svg>

                    <Link to="/characters" className="my-2 ml-2">
                      <span className="text-white text-xl">Characters</span>
                    </Link>
                  </div>
                </li>
                <li className="mb-12 w-full">
                  <div className="hover:bg-mustard rounded flex justify-center text-white hover:text-gray-300 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26.034"
                      height="23.406"
                      viewBox="0 0 26.034 23.406"
                      className="w-4 h-4"
                    >
                      <g id="favorite-filled" transform="translate(1 0)">
                        <path
                          id="Path_89"
                          data-name="Path 89"
                          d="M22.055,2.98a6.761,6.761,0,0,0-9.56,0,6.708,6.708,0,0,0-.478.584,6.708,6.708,0,0,0-.478-.584,6.76,6.76,0,0,0-9.56,9.56L12.017,22.03,22.055,12.54A6.761,6.761,0,0,0,22.055,2.98Z"
                          fill="#b70208"
                          stroke="#b70208"
                          stroke-width="2"
                        />
                      </g>
                    </svg>

                    <Link to="/favorites" className="my-2 ml-2">
                      <span className="text-white text-xl">Favorites</span>
                    </Link>
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
