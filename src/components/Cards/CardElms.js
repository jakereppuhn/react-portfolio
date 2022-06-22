import styled from "styled-components";

export const CardContainer = styled.div`
  height: 216px;
  width: 384px;
  background: #e1e1e1;
  border-radius: 10px;
  margin: 1rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const CardTop = styled.div`
  display: flex;
  flex-direction: row;
  height: 20px;
  width: 384px;
  background: #1e96fc;
  align-items: center;
  border-radius: 5px 5px 0px 0px;
`;

export const CardDot = styled.div`
  height: 8px;
  width: 8px;
  border-radius: 4px;
  background: #ff7769;

  &:nth-child(1) {
    margin-left: 10px;
  }

  &:nth-child(2) {
    background: #ffc850;
    margin-left: 3px;
  }

  &:nth-child(3) {
    background: #00d369;
    margin-left: 3px;
  }
`;

export const CardBar = styled.div`
    height: 8px;
    width 320px;
    background: #fff;
    border-radius: 2px;
    margin-left: 10px;
`;

export const CardImg = styled.img`
  height: 196px;
  width: 384px;
  border-radius: 0px 0px 5px 5px;
`;

export const CardBtn = styled.button`
  border: none;
  border-radius: 5px;
  background: #00d369;
  padding: 5px;
  height: 2rem;
  margin-top: 155px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  align-content: center;
  justify-content: center;
`;
