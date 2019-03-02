import React from "react";
import { ListItem, Description } from "./styled.js";
import Link from "../Typography/Link";
const EducationList = props => (
  <ListItem>
    <Description>{props.description}</Description>
    <Link href={props.link} target="_blank">
      {props.title}
    </Link>
  </ListItem>
);

export default EducationList;
