import { useState, useEffect } from "react";
import { ReturnRandomCover } from "../utils/art/random-covers";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { FetchTVCharacterByURL } from "../modules/character/operations";
import { ClearCharacterListAction } from "../modules/character/actions";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },
}));

export const EpisodeCard = ({ ep }) => {
  const classes = useStyles();
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
      <Modal open={openModal} onClose={() => handleCloseModal()}>
        <div className={`bg-white `}>
          <div>
            <div>Episode Name: {ep.name}</div>
            <div>Air Date: {ep.air_date}</div>
            <div>Show Index: {ep.episode}</div>
          </div>
          <div>
            {CharacterList.length > 0 &&
              CharacterList.map((character) => (
                <div key={character.id}>
                  <img src={character.image} alt={character.name} />
                  <div>{character.name}</div>
                </div>
              ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};
