import React from "react";
import Layout from "../../../layouts";
import SEO from "../../../components/seo";
import LessonCard from "../../../components/LessonCard";
import Intro from "../../../components/Course/Intro";
import Why from "../../../components/Course/Why";
import Who from "../../../components/Course/Who";
import TOC from "../../../components/Course/TOC";
import Donate from "../../../components/Course/Donate";
import Author from "../../../components/Course/Author";
import Link from "../../../components/Typography/Link";

import "./index.css";
import portfolioData from "../../../data.json";
import data from "../../../courseFramerClassic.json";

const FramerBasicsPage = () => (
  <Layout>
    <SEO title="Бесплатный видеокурс | Быстрый старт в основы Framer" />
    <Intro
      type="Видеокурс"
      title="Быстрый старт в&nbsp;основы Framer."
      description="Охватывает все основы для работы в инструменте."
      etc="Бесплатно. 4 часа. YouTube."
      link="https://goo.gl/rHgy9Q"
      linkText="Открыть курс"
      finalLink="https://framer.cloud/nqEaU/"
      finalLinkText="Финальный проект >"
    />
    <Why />
    <Who />
    <TOC>
      {data.lessonList.map(lesson => (
        <LessonCard
          key={lesson.id}
          lessonTitle={lesson.title}
          lessonInfo={lesson.info}
          link={lesson.link}
          gradient={lesson.gradient}
        />
      ))}
    </TOC>
    <Donate
      link="https://goo.gl/rHgy9Q"
      linkText="Яндекс.Деньги"
      finalLink="https://framer.cloud/nqEaU/"
      finalLinkText="Qiwi Копилка"
    />
    <Author>
      {portfolioData.contacts.map(contact => (
        <li key={contact.id}>
          <Link href="{contact.link}" target="_blank">
            {contact.title}
          </Link>
        </li>
      ))}
    </Author>
  </Layout>
);

export default FramerBasicsPage;
