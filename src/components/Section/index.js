import React from "react";
import { ContentBlock } from "./styled.js";

const Section = props => (
  <ContentBlock>
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-4">{props.title}</div>
        <div className="col-xs-12 col-md-8">{props.children}</div>
      </div>
    </div>
  </ContentBlock>
);

export default Section;
