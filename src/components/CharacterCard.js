import { useState } from "react";
import Modal from "@material-ui/core/Modal";

export const CharacterCard = (props) => {
  const { character } = props;
  const { image, name } = character;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex justify-between px-4 flex-col items-center">
      <div className="mb-2">
        <img
          src={image}
          alt={name}
          className="rounded-lg cursor-pointer"
          onClick={() => handleOpenModal()}
        />
      </div>
      <div className="text-white">{name}</div>
      <Modal
        open={isModalOpen}
        onClose={() => handleCloseModal()}
        className="y-40"
      >
        <div className="bg-black bg-opacity-90 m-16 p-12 text-white flex justify-between flex-col items-center md:flex-row">
          <div>
            <div className="text-2xl">Name: {character.name}</div>
            <div className="text-2xl">Gender: {character.gender}</div>
            <div className="text-2xl">Location: {character.location.name}</div>
            <div className="text-2xl">Status: {character.status}</div>
            <div className="text-2xl">Species: {character.species}</div>
          </div>
          <div className="mt-2 md:mt-0">
            <img src={image} alt={name} />
          </div>
        </div>
      </Modal>
    </div>
  );
};
