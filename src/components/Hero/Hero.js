import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Typewriter from 'typewriter-effect';
import { Div1 } from '../Header/HeaderStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, <br />
          I am Yashraj <br />
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Full Stack Developer')
                .pauseFor(2000)
                .deleteAll()
                .typeString('Technology Enthusiast')
                .pauseFor(2000)
                .deleteAll()
                .typeString('Open Source Contributor')
                .pauseFor(2000)
                .start();
            }}
            options={{
              // strings: ['Hello', 'World'],
              autoStart: true,
              loop: true,
            }}

          />

        </SectionTitle>
        
        {/* <SectionText>
        The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps.
        </SectionText> */}
        <Button onClick={() => window.location = 'https://drive.google.com/file/d/1rTM_qU_kQwJwjTaK22jaotVpCip8XYlM/view?usp=sharing'}>Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;