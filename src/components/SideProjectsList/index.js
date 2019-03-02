import React from "react";
import { ListItem, Description } from "./styled.js";
import Link from "../Typography/Link";
const SideProjectsList = props => (
  <ListItem>
    <Link href={props.link} target={props.target}>
      {props.title}
    </Link>
    <Description>{props.description}</Description>
  </ListItem>
);

export default SideProjectsList;
