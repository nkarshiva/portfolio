import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { HeroLeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <HeroLeftSection main center>
      <SectionTitle>
          Hello visitor!!<br/>
          I'm Shivankar<br/>
          Welcome to my personal portfolio
      </SectionTitle>
      <SectionText>
        I'm a Full Stack Developer, with a slighlty more inclination towards frontend side of things, I like to build innovative projects with a clear intention of keeping keeping things optimized and bug free!!. I have experience in building dashboards, portals, websites using technologies including Vanilla Javascript, React, NextJS, NodeJS and Python.
      </SectionText>
      <Button onClick={()=>window.location= 'https://google.com'}>
        Learn More
      </Button>
    </HeroLeftSection>
  </Section>
);

export default Hero;