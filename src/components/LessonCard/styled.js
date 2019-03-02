import styled from "styled-components";

export const LessonCard = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 16px;
  border-radius: 4px;
  font-size: 22px;
  line-height: 32px;
  background: none;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: #060615;
  text-decoration: none;

  transition: all 0.5s ease;

  & {
    margin-bottom: 8px;
  }

  &:last-child {
    margin-bottom: 0;
  }

  & span:nth-child(2) {
    font-size: 14px;
    line-height: 20px;
  }

  :hover {
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0);
    background: ${props => props.gradient};

    & span:last-child {
      opacity: 0.4;
    }
  }
`;
export const LessonCardMask = styled.span`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  height: 100%;
  width: 100%;
  z-index: -1;
  background-repeat: no-repeat;
  background-cover: cover;
  background-position: center;
  background-image: url(${props => props.image});
  transition: all 0.5s ease;
`;
