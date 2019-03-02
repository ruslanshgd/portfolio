import React from "react";
import { ContentBlock } from "./styled.js";
import H1 from "../../Typography/H1";
import Text from "../../Typography/Text";
import Caption from "../../Typography/Caption";
const Donate = props => (
  <ContentBlock>
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <Caption style={{ margin: "0.8rem 0" }}>Для кого курс</Caption>
          <H1 style={{ margin: "1rem 0" }}>UX/UI дизайнерам.</H1>
        </div>
        <div className="col-xs-12 col-md-9 col-lg-7">
          <Text>
            Сегодня работа над микровзаимодействиями, анимацией и&nbsp;реальными
            данными в&nbsp;приложениях и&nbsp;на&nbsp;сайтах — неотъемлемая
            часть задач дизайнера.
          </Text>
          <Text>
            Framer закрывает все эти потребности благодаря двум режимам: дизайн
            и&nbsp;код. Данный курс охватывает все необходимые темы
            по&nbsp;основам работы в&nbsp;этом инструменте, включая основы
            программирования.
          </Text>
          <Text>
            После прохождения курса вы сможете создавать прототипы
            с&nbsp;реальными данными, анимировать элементы интерфейса
            и&nbsp;подключать не&nbsp;сложную аналитику для последующего
            тестирования гипотез приложений или&nbsp;сайтов.
          </Text>
        </div>
      </div>
    </div>
  </ContentBlock>
);

export default Donate;

/*    <section className="background-alt section">
      <div className="section-content">
        <div className="container">
          
          <div className="row">
            <div className="col-xs-12  col-lg-7">
              <p className="show-text">
                Сегодня работа над микровзаимодействиями, анимацией
                и&nbsp;реальными данными в приложениях и&nbsp;на&nbsp;сайтах —
                неотъемлемая часть задач дизайнера.
              </p>
              <p className="show-text">
                Framer закрывает все эти потребности благодаря двум режимам:
                дизайн и код. Данный курс охватывает все необходимые темы по
                основам работы в этом инструменте, включая основы
                программирования.
              </p>
              <p className="show-text">
                После прохождения курса вы сможете создавать прототипы с
                реальными данными, анимировать элементы интерфейса и подключать
                не сложную аналитику для последующего тестирования гипотез
                приложений или&nbsp;сайтов.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section> */
