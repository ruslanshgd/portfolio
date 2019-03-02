import React from 'react'
import { StyledButton } from './styled.js'

const Button = props => (
  <StyledButton
    textColor={props.textColor}
    bgColor={props.bgColor}
    bgHoverColor={props.bgHoverColor}
    href={props.link}
    target={props.target}
  >
    {props.children}
  </StyledButton>
)

export default Button
