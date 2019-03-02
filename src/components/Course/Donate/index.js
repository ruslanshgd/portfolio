import React from "react";
import { ContentBlock, ButtonGroup } from "./styled.js";
import Button from "../../Button";
import H1 from "../../Typography/H1";
import Text from "../../Typography/Text";
import Caption from "../../Typography/Caption";
const Donate = props => (
  <ContentBlock>
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-9 col-lg-7">
          <Caption style={{ margin: "0.8rem 0" }}>Поддержи автора</Caption>
          <H1 style={{ margin: "1rem 0" }}>Донатик</H1>
          <Text>
            Если понравился курс,&nbsp;то поддержи меня&nbsp;написав отзыв любым
            удобным способом или поделись курсом в&nbsp;социальных сетях.
          </Text>
          <Text>
            На&nbsp;добровольной основе можешь задонатить на&nbsp;кофе.
            Если&nbsp;не&nbsp;жалко, то&nbsp;ссылки на&nbsp;Яндекс.Деньги или
            Qiwi копилку ниже. Они&nbsp;откроются в&nbsp;новом окне.
          </Text>
          <ButtonGroup>
            <Button
              link={props.link}
              target="_blank"
              rel="noopener noreferrer"
              textColor="#000"
              bgColor="#ffdb4d"
              bgHoverColor="#ffd633"
            >
              {props.linkText}
            </Button>
            <Button
              link={props.finalLink}
              target="_blank"
              rel="noopener noreferrer"
              textColor="#fff"
              bgColor="rgb(255, 140, 0)"
              bgHoverColor="rgb(255, 130, 0)"
            >
              {props.finalLinkText}
            </Button>
          </ButtonGroup>
        </div>
        <div className="col-xs-12 col-md-8">{props.children}</div>
      </div>
    </div>
  </ContentBlock>
);

export default Donate;
