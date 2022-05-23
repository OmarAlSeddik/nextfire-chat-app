import { useState } from "react";
import RoomsCard from "./RoomsCard";
import RoomsModal from "./RoomsModal";

const Rooms = () => {
  const [openedModal, setOpenedModal] = useState(false);

  return (
    <>
      <RoomsModal openedModal={openedModal} setOpenedModal={setOpenedModal} />
      <RoomsCard setOpenedModal={setOpenedModal} />
    </>
  );
};

export default Rooms;
