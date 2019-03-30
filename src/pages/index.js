import React from "react";
import Layout from "../layouts";
import SEO from "../components/seo";
import Incut from "../components/Incut";
import JobList from "../components/JobList";
import SideProjectsList from "../components/SideProjectsList";
import AwardsList from "../components/AwardsList";
import SkillsList from "../components/SkillsList";
import EducationList from "../components/EducationList";
import ContactsList from "../components/ContactsList";
import Section from "../components/Section";
import List from "../components/List";
import Button from '../components/Button';
import Link from "../components/Typography/Link";
import data from "../data.json";
const IndexPage = () => (
  <Layout>
    <SEO
      title="Portfolio"
      keywords={["Ruslan Sharipov", "UX UI Designer", "Developer"]}
    />

    <Incut>
        Hi. I’m Ruslan Sharipov, UX/UI designer currently based in
      Saint-Petersburg, Russia.
    </Incut>

    <Section title="Overview">
        With almost 5 years of work in UX/UI Design, I have worked across a broad
      range of companies from startups and small to the enterprise level
      company. I love translate user and business need into usable products by
      using research, analytics, and practice. I prefer to work with small teams
      which proud and love their work.
      <div style={{ marginTop: "1.6rem" }}>
        <Button 
          link="https://calendly.com/ruslan-sharipov"
          target="_blank"
          rel="noopener noreferrer"
          textColor="#fff"
          bgColor="#00aaff"
          bgHoverColor="#0487ff">Make appointment
        </Button>
        <Link 
          href="mailto:ruslanshgd@gmail.com?subject=YourAwsomeProject"
          target="_blank"
          rel="noopener noreferrer"
          textColor="#333">or just email me
        </Link>
      </div>
    </Section>

    <Section title="Jobs">
      <List>
        {data.jobs.map(job => (
          <JobList
            key={job.id}
            company={job.company}
            date={job.date}
            link={job.link}
          />
        ))}
      </List>
    </Section>

    <Section title="Side projects">
      <List>
        {data.sideprojects.map(project => (
          <SideProjectsList
            key={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
            target={project.target}
          />
        ))}
      </List>
    </Section>

    <Section title="Awards and Recognitions">
      <List>
        {data.awards.map(award => (
          <AwardsList
            key={award.id}
            title={award.title}
            description={award.description}
            link={award.link}
          />
        ))}
      </List>
    </Section>

    <Section title="Skills">
      <List>
        {data.skills.map(skill => (
          <SkillsList
            key={skill.id}
            title={skill.title}
            description={skill.description}
            link={skill.link}
          />
        ))}
      </List>
    </Section>

    <Section title="Education">
      <List>
        {data.education.map(educate => (
          <EducationList
            key={educate.id}
            title={educate.title}
            description={educate.description}
            link={educate.link}
          />
        ))}
      </List>
    </Section>

    <Section title="Contact">
      <List>
        {data.contacts.map(contact => (
          <ContactsList
            key={contact.id}
            title={contact.title}
            link={contact.link}
          />
        ))}
      </List>
    </Section>
    <Section></Section>
  </Layout>
);

export default IndexPage;
