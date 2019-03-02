import React from "react";
import { ListItem, Title, Description } from "./styled.js";

const AwardsList = props => (
  <ListItem>
    <Title>{props.title}</Title>
    <Description>{props.description}</Description>
  </ListItem>
);

export default AwardsList;
