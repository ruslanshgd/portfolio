import React from "react";
import { ContentBlock } from "./styled.js";
import H1 from "../../Typography/H1";
import Text from "../../Typography/Text";
import Caption from "../../Typography/Caption";
const TOC = props => (
  <ContentBlock>
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <Caption style={{ margin: "0.8rem 0" }}>
            Ответы на все базовые вопросы
          </Caption>
          <H1 style={{ margin: "1rem 0" }}>Программа курса.</H1>
          <Text>
            Ниже ссылки на YouTube, которые откроются в новом окне. Курс
            занимает ~4 часа.
          </Text>
        </div>
        <div className="col-xs-12">{props.children}</div>
      </div>
    </div>
  </ContentBlock>
);

export default TOC;
