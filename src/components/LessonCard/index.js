import React from "react";
import { LessonCard, LessonCardMask } from "./styled.js";

const Card = props => (
  <LessonCard href={props.link} gradient={props.gradient} target="_blank">
    <span>{props.lessonTitle}</span>
    <span>{props.lessonInfo}</span>
    <LessonCardMask image={require("../../images/lesson-card-mask.png")} />
  </LessonCard>
);

export default Card;
