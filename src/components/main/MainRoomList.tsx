import React, { FC } from "react";
import { floorType, roomType } from "../../models";
import * as S from "./style";

interface Props {
  floor: floorType;
  setBookingRoom: (room: roomType) => void;
  setModalType: (type: string) => void;
}

const MainRoomList: FC<Props> = ({ floor, setBookingRoom, setModalType }) => {
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
