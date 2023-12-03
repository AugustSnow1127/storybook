import styled from 'styled-components';

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  display: inline-block;
  vertical-align: middle;
`;

export const RndStyle = styled.div`
  // 用客製化className來控制Rnd的style
  &.rndModal .react-draggable {
    border: none !important;
    overflow: hidden;
    border-radius: 7px;
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    z-index: 1069;
  }
`;

export const ModalStyle = styled.div`
  // layout
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;

  // font
  color: white;
  font-size: 16px;
  font-family: "Segoe UI";
  font-weight: bold;
  text-align: left;

  background: #FFFFFF;
`;

export const ModalHeader = styled.div`
  // layout
  width: 100%;
  background: #3E4042;
  // padding: 12px 16px;
  display: flex;
  justify-content: space-between;

  // font
  color: white;
`;

export const ModalTitle = styled.div`
  padding: 10px;
`;

export const CloseIcon = styled(Icon)`
  cursor: pointer;
  padding: 10px
`;

export const ModalBody = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: scroll;

  > div {
    height: 100%;
    width: 100%;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 7px;
    border: 2px solid #FAFAFA;
    background: #B9B9B9;
  }

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #FAFAFA;
  }
`;

export const RndModalChildren = styled.div`
  color: rgba(0, 0, 0, 0.65);
`;