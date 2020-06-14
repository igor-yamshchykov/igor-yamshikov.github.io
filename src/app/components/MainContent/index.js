import React, { Fragment } from "react";
import Section from "~/app/components/Section";
import SeparatorLine from "~/app/components/SeparatorLine";
import data from "~/data";
import LogoTextBlock from "./components/LogoTextBlock";
import "./styles.scss";

const MainContent = () => (
  <>
    <Section
      title="Summary"
      name="summary"
      className="mt-1"
      textClass="mt-3 text-dark"
    >
      {data.summary}
    </Section>
    <SeparatorLine />
    <Section
      title="Work Experience"
      name="work-experience"
      className="mt-1"
      textClass="mt-3 text-dark"
    >
      {data.workExperience.map(e => (
        <Fragment key={e.logoSrc}>
          <LogoTextBlock logoSrc={e.logoSrc} data={e.data} />
          <SeparatorLine />
        </Fragment>
      ))}
    </Section>
    <Section
      title="Education"
      name="education"
      className="mt-1"
      textClass="mt-3 text-dark"
    >
      {data.education.map(e => (
        <LogoTextBlock icon={e.icon} data={e.data} />
      ))}
    </Section>
    <SeparatorLine />
    <Section
      title="Certifications"
      name="certifications"
      className="mt-1"
      textClass="mt-3 text-dark"
    >
      {data.certifications.map(e => (
        <LogoTextBlock
          key={e}
          link={e.link}
          logoSrc={e.logoSrc}
          data={e.data}
        />
      ))}
    </Section>
  </>
);

export default MainContent;
