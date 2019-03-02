import React from "react";
import H1 from "../Typography/H1";
import { ContentBlock } from "./styled";
const Incut = props => (
  <ContentBlock>
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-8">
          <H1>{props.children}</H1>
        </div>
      </div>
    </div>
  </ContentBlock>
);

export default Incut;
