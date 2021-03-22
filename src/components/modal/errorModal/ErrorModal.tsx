import React, { FC } from "react";
import { useHistory } from "react-router";
import * as S from "../style";

interface Props {
  error: number;
  setError: (error: number) => void;
}

const errorText = {
  401: "리더만 예약 취소를 할 수 있습니다.",
  409: "신청자 또는 멤버가 동일한 시간대에 예약 했습니다.",
  400: "입력한 정보를 확인해 주세요.",
  500: "서버 에러",
  422: "잘못된 접근입니다.",
};

type errorType = 401 | 409 | 400 | 500 | 422;

const ErrorModal: FC<Props> = ({ error, setError }) => {
  const history = useHistory();
  const closeButtonClickHandler = () => {
    if (error === 401 || error === 422) {
      history.push("/signin");
    }
    setError(0);
  };
  return (
    <S.Modal>
      <S.ModalBody>
        <div>
          <S.ModalErrorText>{errorText[error as errorType]}</S.ModalErrorText>
          <S.ModalButtonWrapper>
            <S.ModalButton nextButton={true} onClick={closeButtonClickHandler}>
              확인
            </S.ModalButton>
          </S.ModalButtonWrapper>
        </div>
      </S.ModalBody>
    </S.Modal>
  );
};

export default ErrorModal;
