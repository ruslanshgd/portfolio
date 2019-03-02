import React from "react";
import { ListItem, Description } from "./styled.js";
import Link from "../Typography/Link";
const ContactsList = props => (
  <ListItem>
    <Link href={props.link} target="_blank">
      {props.title}
    </Link>
    <Description>{props.description}</Description>
  </ListItem>
);

export default ContactsList;
