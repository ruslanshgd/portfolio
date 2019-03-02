import React from "react";
import { ListItem, Description } from "./styled.js";
import Link from "../Typography/Link";
const JobList = props => (
  <ListItem>
    <Link href={props.link} target="_blank">
      {props.company}
    </Link>
    <Description>{props.date}</Description>
  </ListItem>
);

export default JobList;
