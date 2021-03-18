import React, { FC, useState } from "react";
import * as S from "../style";

interface Props {
  nextButtonClickHandler: () => void;
  exitButtonClickHandler: () => void;
  bookingRoom: roomType;
  bookTime: string[];
  setDescription: (value: string) => void;
  description: string;
}

type roomType = {
  id: number;
  name: string;
};

const timeEnum = {
  L: "점심시간",
  D: "저녁시간",
  "8": "8교시",
  "9": "8교시",
  "10": "10교시",
};

const ReasonModal: FC<Props> = ({
  nextButtonClickHandler,
  exitButtonClickHandler,
  bookingRoom,
  bookTime,
  setDescription,
  description,
}) => {
  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };
  return (
    <div>
      <S.ModalReason>
        <p className="place">{bookingRoom.name}</p>
        <p>
          {bookTime.map((time) => (
            <span key={time}>
              {timeEnum[time as "8" | "9" | "10" | "D" | "L"]} /
            </span>
          ))}
        </p>
      </S.ModalReason>
      <S.ModalInput
        placeholder="사유를 10자 이상으로 입력하세요"
        onChange={inputChangeHandler}
      />
      <S.ModalButtonWrapper>
        <S.ModalButton nextButton={false} onClick={exitButtonClickHandler}>
          취소
        </S.ModalButton>
        <S.ModalButton
          nextButton={true}
          onClick={() => {
            if (description.length <= 10) return;
            nextButtonClickHandler();
          }}
          disable={description.length <= 10}
        >
          다음
        </S.ModalButton>
      </S.ModalButtonWrapper>
    </div>
  );
};

export default ReasonModal;
