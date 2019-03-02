import styled from "styled-components";

export const ContentBlock = styled.footer`
  margin-top: 9.6rem;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  padding-top: 2rem;
  padding-bottom: 9.6rem;

  @media (max-width: 410px) {
    padding-top: 0rem;
    padding-bottom: 4rem;
    flex-direction: column;

    & li {
      padding-top: 1rem;
    }
  }
`;
