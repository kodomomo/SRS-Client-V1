import React, { FC } from "react";
import * as S from "./style";

type floorType = {
  floor: number;
  list: Array<roomType>;
};

type roomType = {
  id: number;
  name: string;
};

interface Props {
  floor: floorType;
  isBookedRoom: (value: roomType) => boolean;
  setBookingRoom: (room: roomType) => void;
  setModalType: (type: string) => void;
}

const MainRoomList: FC<Props> = ({
  floor,
  isBookedRoom,
  setBookingRoom,
  setModalType,
}) => {
  const getRoomClickHandler = (room: roomType) => {
    return () => {
      setModalType("timeset");
      setBookingRoom(room);
    };
  };
  const renderRoom = (floor: floorType) =>
    floor.list.map((room) => (
      <S.MainRoomListItem
        selected={false}
        onClick={getRoomClickHandler(room)}
        key={room.name}
      >
        {room.name}
      </S.MainRoomListItem>
    ));
  return (
    <S.MainRoomListWrapper>
      <h5>
        {floor.floor}
        <span>층</span>
      </h5>
      <S.MainRoomList>{renderRoom(floor)}</S.MainRoomList>
    </S.MainRoomListWrapper>
  );
};

export default MainRoomList;
