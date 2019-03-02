import styled from "styled-components";

export const StyledButton = styled.a`
  cursor: pointer;
  display: inline-block;
  padding: 1rem 2.4rem;
  border-radius: 4px;
  text-decoration: none;
  background-color: ${props => props.bgColor};
  color: ${props => props.textColor};
  transition: all 0.24s ease;
  margin-right: 1.2rem;

  &:last-child {
    margin-right: 0;
  }

  :hover {
    background-color: ${props => props.bgHoverColor};
    color: ${props => props.textColor};
  }
`;
