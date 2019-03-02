import React from "react";
import { ContentBlock, ButtonGroup } from "./styled.js";
import Button from "../../Button";
import H1 from "../../Typography/H1";
import Text from "../../Typography/Text";
import Caption from "../../Typography/Caption";
import {
  FacebookShareButton,
  VKShareButton,
  TwitterShareButton,
  TelegramShareButton,
  FacebookIcon,
  VKIcon,
  TwitterIcon,
  TelegramIcon
} from "react-share";
const shareUrl = `https://www.rsgd.ru/courses/framer/`;
const title = "Бесплатный видеокурс Быстрый старт в основы Framer";

const Intro = props => (
  <ContentBlock>
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-5" style={{ marginTop: "8rem" }}>
          <Caption style={{ margin: "0.8rem 0" }}>{props.type}</Caption>
          <H1 style={{ margin: "1rem 0" }}>{props.title}</H1>
          <Text>{props.description}</Text>
          <Caption>{props.etc}</Caption>
          <ButtonGroup>
            <Button
              link={props.link}
              target="_blank"
              rel="noopener noreferrer"
              textColor="#fff"
              bgColor="#00aaff"
              bgHoverColor="#0487ff"
            >
              {props.linkText}
            </Button>
            <Button
              link={props.finalLink}
              target="_blank"
              rel="noopener noreferrer"
              textColor="#fff"
              bgColor="#333"
              bgHoverColor="#131313"
            >
              {props.finalLinkText}
            </Button>

            <div className="intro-course-sharing">
              <FacebookShareButton url={shareUrl} quote={title}>
                <FacebookIcon size={40} />
              </FacebookShareButton>
              <VKShareButton
                url={shareUrl}
                title={title}
                description="Бесплатный видеокурс Быстрый старт в основы Framer"
              >
                <VKIcon size={40} />
              </VKShareButton>
              <TwitterShareButton url={shareUrl} title={title}>
                <TwitterIcon size={40} />
              </TwitterShareButton>
              <TelegramShareButton url={shareUrl} title={title}>
                <TelegramIcon size={40} />
              </TelegramShareButton>
            </div>
          </ButtonGroup>
        </div>
        <div className="col-xs-12 col-md-7 center-md">
          <video
            width="307"
            height="100%"
            controls="true"
            autoPlay="autoplay"
            loop="loop"
            poster={require("../../../images/video/cover/HeroMockup.png")}
          >
            <source
              src={require("../../../images/video/finalproject.mp4")}
              type="video/mp4"
            />
            <source
              src={require("../../../images/video/finalproject.webm")}
              type="video/webm"
            />
            Браузер не поддерживает видео
          </video>
        </div>
      </div>
    </div>
  </ContentBlock>
);

export default Intro;
