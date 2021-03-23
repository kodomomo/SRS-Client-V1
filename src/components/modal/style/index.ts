import styled, { css } from "styled-components";

export const ModalBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  opacity: 0.7;
  position: absolute;
  top: 0;
  z-index: -1;
`;

export const Modal = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  z-index: 100;
  position: fixed;
`;

export const ModalBody = styled.div`
  padding: 22px 11px;
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalTimeButton = styled.label<{
  booked: boolean;
  checked: boolean;
}>`
  width: 70px;
  height: 30px;
  font-size: 16px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ booked, checked }) =>
    booked
      ? css`
          background-color: #7d7d7d;
          color: white;
        `
      : checked
      ? css`
          background-color: #2e2e2e;
          color: white;
        `
      : css`
          color: #7d7d7d;
          background-color: #f6f6f6;
        `}
`;

export const ModalTimeButtonWrapper = styled.div`
  display: flex;
`;

export const ModalButton = styled.button<{
  nextButton: boolean;
  disable?: boolean;
}>`
  width: 91px;
  height: 30px;
  margin: 5px;
  border: none;
  ${({ nextButton }) =>
    nextButton
      ? css`
          background-color: #2e2e2e;
          color: white;
        `
      : css`
          background-color: #efefef;
          color: #7d7d7d;
        `}
  ${({ disable }) =>
    disable
      ? css`
          background-color: #7d7d7d;
          color: white;
        `
      : css``}
`;

export const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ModalReason = styled.div`
  display: flex;
  margin-bottom: 11px;
  justify-content: space-between;
  > p {
    font-size: 16px;
    font-weight: 100;
    > span {
      margin: 0px 2px;
    }
  }
  > p.place {
    margin-right: 10px;
  }
`;

export const ModalInput = styled.input`
  width: 100%;
  min-width: 240px;
  height: 35px;
  font-size: 16px;
  border: none;
  outline: none;
  background-color: #f6f6f6;
  padding: 0px 10px;
  box-sizing: border-box;
  margin-bottom: 20px;
  color: #7d7d7d;
  user-select: text;
`;

export const ModalSearchInput = styled.div`
  width: 100%;
  min-width: 240px;
  height: 35px;
  font-size: 16px;
  border: none;
  outline: none;
  background-color: #f6f6f6;
  display: flex;
  align-items: center;
  padding: 0px 5px;
  box-sizing: border-box;
  margin-bottom: 15px;
  > input {
    border: none;
    background-color: #f6f6f6;
    color: #7d7d7d;
  }
`;

export const ModalUserList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-bottom: 10px;
  justify-content: center;
  > p {
    text-align: center;
  }
`;

export const ModalUserListItem = styled.li<{ leader?: boolean }>`
  min-width: 65px;
  height: 25px;
  margin: 2px;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  padding: 2px 5px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${({ leader }) =>
    leader
      ? css`
          background-color: #2e2e2e;
          color: white;
        `
      : css`
          background-color: #efefef;
          color: #7d7d7d;
        `}
  > p.delete {
    margin: 5px;
    margin-left: 5px;
  }
  > p {
    margin: 2px;
  }
`;

export const ModalSearchedUserList = styled.ul`
  width: 100%;
  max-height: 100px;
  list-style: none;
  overflow: hidden;
  position: absolute;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.16);
  background-color: white;
  overflow-y: scroll;
`;

export const ModalSearchedUserListItem = styled.li`
  width: 100%;
  height: 26px;
  color: #7d7d7d;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  box-sizing: border-box;
`;

export const ModalSearchWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const ModalInfoList = styled.ul`
  width: 100%;
  list-style: disc;
  transform: translate(16px, 0px);
`;

export const ModalInfoListItem = styled.li`
  width: 90%;
  font-size: 18px;
  font-weight: 100;
  margin: 3px;
`;

export const ModalErrorText = styled.div`
  margin: 10px;
  font-size: 16px;
  text-align: center;
`;
