import React from "react";
import { ContentBlock } from "./styled.js";
import H1 from "../../Typography/H1";
import Text from "../../Typography/Text";
import Caption from "../../Typography/Caption";
const Why = props => (
  <ContentBlock>
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <Caption style={{ margin: "0.8rem 0" }}>Почему Framer</Caption>
          <H1 style={{ margin: "1rem 0" }}>
            Никаких N-инструментов.
            <br />
            Только&nbsp;Framer.
          </H1>
        </div>
        <div className="col-xs-12 col-md-9 col-lg-7">{props.children}</div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-9 col-lg-7">
          <Text>
            Если начинаем говорить о проверке гипотез с&nbsp;помощью наших
            прототипов, то&nbsp;упираемся в&nbsp;предел возможностей
            инструментов.
          </Text>
          <Text>
            Выйти из этого положения нам помогают разработчики. Но&nbsp;часто
            приходится подготавливать макеты к тестированию какой-либо идеи
            и&nbsp;«рисовать» реальные данные на&nbsp;кликабельном прототипе в
            одном из&nbsp;многочисленных инструментов.
          </Text>
          <Text>
            Этот процесс повторяется каждый раз и&nbsp;это отнимает время
            у&nbsp;всех: бизнеса, руководителей, дизайнеров
            и&nbsp;разработчиков.
          </Text>
          <Text>
            Framer решение, поскольку закрывает необходимость проектировать,
            прототипировать и&nbsp;тестировать гипотезы в&nbsp;отдельных
            инструментах.
          </Text>
        </div>
      </div>
      <ContentBlock>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <img
              src={require("../../../images/icons/ic_why_1.png")}
              srcSet={`
                ${require("../../../images/icons/ic_why_1.png")} 1x,
                ${require("../../../images/icons/ic_why_1@2x.png")} 2x
                `}
              alt="Грустный смайлик"
            />
            <p>
              <strong>Проблема</strong> инструментов для создания прототипов в
              том, что их очень много. Количество инструментов растёт
              с&nbsp;каждым годом, но подходы к&nbsp;решению задач остаются
              неизменными.
            </p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <img
              src={require("../../../images/icons/ic_why_2.png")}
              srcSet={`
                ${require("../../../images/icons/ic_why_2.png")} 1x,
                ${require("../../../images/icons/ic_why_2@2x.png")} 2x
                `}
              alt="Задумчивый смайлик"
            />
            <p>
              <strong>Решение</strong> — Framer, в котором можно спроектировать
              отзывчивый интерфейс, тут же написать логику и&nbsp;анимацию для
              прототипа, а затем протестировать решение, используя аналитику.
            </p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <img
              src={require("../../../images/icons/ic_why_3.png")}
              srcSet={`
                ${require("../../../images/icons/ic_why_3.png")} 1x,
                ${require("../../../images/icons/ic_why_3@2x.png")} 2x
                `}
              alt="Клёвый смайлик"
            />
            <p>
              <strong>Преимущество</strong> также заключается в&nbsp;том, что
              используя код, дизайнер находит общий язык с разработчиками
              и&nbsp;лучше прорабатывает логику взаимодействия пользователя
              с&nbsp;продуктом.
            </p>
          </div>
          <div className="col-md-6 col-lg-3">
            <img
              src={require("../../../images/icons/ic_why_4.png")}
              srcSet={`
                ${require("../../../images/icons/ic_why_4.png")} 1x,
                ${require("../../../images/icons/ic_why_4@2x.png")} 2x
                `}
              alt="Кодер смайлик"
            />
            <p>
              <strong>Вывод</strong> напрашивается следующий: вам&nbsp;нужно
              понимание того, как устроена «кухня» изнутри. После этого можно
              погрузиться в тему с головой и изучить js и react, но до того
              момента Framer — то, с чего стоит начинать.
            </p>
          </div>
        </div>
      </ContentBlock>
    </div>
  </ContentBlock>
);

export default Why;
