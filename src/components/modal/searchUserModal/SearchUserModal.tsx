import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { roomType } from "../../../models";
import * as S from "../style";

interface Props {
  nextButtonClickHandler: () => void;
  exitButtonClickHandler: () => void;
  description: string;
  room: roomType;
  bookTime: string[];
  setError: (error: number) => void;
  user: userType;
}

type userType = {
  name: string;
  number: string;
  id: string;
};

const SearchUserModal: FC<Props> = ({
  nextButtonClickHandler,
  exitButtonClickHandler,
  description,
  room,
  bookTime,
  setError,
  user,
}) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchedUser, setSearchedUser] = useState<userType[]>([]);
  const [selectedUser, setSelectedUser] = useState<userType[]>([]);
  const searchInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchInput(event.target.value);
  };
  const getSearchedUserClickHandler = (user: userType) => {
    return () => {
      setSearchInput("");
      setSelectedUser((state: userType[]) => [...state, user]);
    };
  };
  const getDeleteSelectedUser = (targetUser: userType) => {
    return () => {
      setSelectedUser((state: userType[]) => {
        return state.filter((user: userType) => targetUser.id !== user.id);
      });
    };
  };
  const renderSearchedUser = (users: userType[]) =>
    users.map((user) => (
      <S.ModalSearchedUserListItem
        onClick={getSearchedUserClickHandler(user)}
        key={user.id}
      >
        {user.number} {user.name}
      </S.ModalSearchedUserListItem>
    ));
  const renderSelectedUser = (users: userType[]) =>
    users.map((user) => (
      <S.ModalUserListItem key={user.id}>
        <p>{user.number}</p>
        <p>{user.name}</p>
        <p onClick={getDeleteSelectedUser(user)} className="delete">
          x
        </p>
      </S.ModalUserListItem>
    ));
  const searchUser = async (input: string) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/user/search?query=${input}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );

      return data.users.filter(
        (searchedUser: userType) => user.number !== searchedUser.number
      );
    } catch (error) {
      if (error.response.status) {
        setError(error.response.status);
      }
    }
  };
  const searchUserAndSetData = async (user: string) => {
    const users = await searchUser(user);
    setSearchedUser(users);
  };
  const getUserIds = (users: userType[]) => {
    return users.map((user: userType) => user.id);
  };
  const makeReservation = (time: string) => {
    return axios.post(
      `${process.env.REACT_APP_SERVER_URL}/apply/seminar-room`,
      {
        members: getUserIds(selectedUser),
        description,
        room: room.name,
        time,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
  };
  const getMakeReservations = async () => {
    const makeReservationFunc = bookTime.map((time: string) =>
      makeReservation(time)
    );
    try {
      await Promise.all(makeReservationFunc);
      nextButtonClickHandler();
    } catch (error) {
      if (error.response.status) setError(error.response.status);
    }
  };
  useEffect(() => {
    if (searchInput.length <= 0) return;
    searchUserAndSetData(searchInput);
  }, [searchInput]);
  return (
    <div>
      <S.ModalUserList>{renderSelectedUser(selectedUser)}</S.ModalUserList>
      <S.ModalSearchWrapper>
        <S.ModalSearchInput>
          <input
            placeholder="학번을 검색하세요."
            value={searchInput}
            onChange={searchInputChangeHandler}
          />
          <div />
        </S.ModalSearchInput>
        {searchInput.length > 0 ? (
          <S.ModalSearchedUserList>
            {renderSearchedUser(searchedUser)}
          </S.ModalSearchedUserList>
        ) : (
          ""
        )}
        <S.ModalButtonWrapper>
          <S.ModalButton nextButton={false} onClick={exitButtonClickHandler}>
            취소
          </S.ModalButton>
          <S.ModalButton
            nextButton={true}
            onClick={async () => {
              await getMakeReservations();
            }}
          >
            예약
          </S.ModalButton>
        </S.ModalButtonWrapper>
      </S.ModalSearchWrapper>
    </div>
  );
};

export default SearchUserModal;
