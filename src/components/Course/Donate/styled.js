import styled from "styled-components";

export const ContentBlock = styled.section`
  margin-top: 9.6rem;
`;

export const ButtonGroup = styled.div`
  margin-bottom: 1.2rem;
  & a {
    margin-bottom: 1.2rem;
  }

  @media (max-width: 410px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    & a {
      margin-right: 0;
    }
  }
`;
