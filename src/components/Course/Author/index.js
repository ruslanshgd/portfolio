import React from "react";
import { List, ContentBlock } from "./styled.js";
import H2 from "../../Typography/H2";
import Caption from "../../Typography/Caption";

const Author = props => (
  <ContentBlock>
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-9 col-lg-7">
          <Caption style={{ margin: "0.8rem 0" }}>Бывает так, что...</Caption>
          <H2 style={{ margin: "1rem 0" }}>Остаются вопросы.</H2>
          <List>{props.children}</List>
        </div>
      </div>
    </div>
  </ContentBlock>
);

export default Author;
