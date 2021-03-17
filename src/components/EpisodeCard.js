import { useState } from "react";
import { ReturnRandomCover } from "../utils/art/random-covers";
import Modal from "@material-ui/core/Modal";
import { useDispatch, useSelector } from "react-redux";
import { FetchTVCharacterByURL } from "../modules/character/operations";
import { ClearCharacterListAction } from "../modules/character/actions";
import { useHistory } from "react-router-dom";

/**
 * Represents one of the cards on the Episode Home Page
 *
 * Toggles a modal on click that lists more information about episode and displays all the characters in the show
 * @param {*} param0
 * @returns
 */
export const EpisodeCard = ({ ep }) => {
  const history = useHistory();
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const CharacterList = useSelector((state) => state.characters.character_list);

  const handleOpenModal = () => {
    dispatch(FetchTVCharacterByURL(ep.characters));
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    dispatch(ClearCharacterListAction());
  };

  const handleCharacterClick = (character) => {
    // set character as current character of its reducer

    handleCloseModal();
    // navigate to character page
    history.push(`/characters/${character.id}`);
  };
  return (
    <div className="overflow-hidden lg:w-48 flex flex-col items-center relative">
      <img
        src={ReturnRandomCover()}
        alt={ep.name}
        className="w-4/5 lg:w-5/6 md:h-64 md:w-48 rounded-lg object-cover"
        onClick={() => handleOpenModal()}
      />
      <div className="mt-8">
        <span className="text-white text-xl">{ep.name}</span>
      </div>
      <Modal
        open={openModal}
        onClose={() => handleCloseModal()}
        className="y-40"
      >
        <div className="bg-black bg-opacity-90 m-16 p-12 text-white">
          <div className="">
            <div className="text-2xl">Episode Name: {ep.name}</div>
            <div className="text-2xl">Air Date: {ep.air_date}</div>
            <div className="text-2xl">Show Index: {ep.episode}</div>
          </div>
          <div className="mt-4">
            {CharacterList.length > 0 &&
              CharacterList.map((character) => (
                <div
                  key={character.id}
                  className="flex justify-between px-2 hover:bg-mustard mb-4 border-2 cursor-pointer"
                  onClick={() => handleCharacterClick(character)}
                >
                  <img
                    src={character.image}
                    alt={character.name}
                    className="w-12"
                  />
                  <div>{character.name}</div>
                </div>
              ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};
