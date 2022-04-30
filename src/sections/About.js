import React from "react";
import styled from "styled-components";
import poster from '../assets/Images/abt.jpeg';
import { motion } from "framer-motion";

const Section = styled.section`
  position: relative;
  background-color: #B21835;
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  margin: 0 auto;
`;
const Title = styled(motion.h1)`
  font-family: "Kaushan Script";
  font-size: ${(props) => props.theme.fontBig};
  font-weight: 300;
  color: ${(props) => props.theme.text};

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;

  @media (max-width: 88em) {
    font-size: calc(4rem + 4vw);
}
@media (max-width: 48em) {
    font-size: calc(3rem + 3vw);
}
@media (max-width: 21em) {
    font-size: calc(2rem + 2vw);
    margin-top: -10%;
}
`;

const Left = styled(motion.div)`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  font-weight: 300;

  position: relative;
  z-index: 5;
  margin-top: 20%;
  margin-left: 2%;

  @media (max-width: 57em){
    width: 80%;
    position: absolute;
  font-size: ${(props) => props.theme.fontxl};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0;
    padding: 2rem;
    font-weight: 600;

    backdrop-filter: blur(2px);
    background-color: ${props => `rgba(${props.theme.textRgba},0.4)`};
    border-radius: 20px;


  }
  @media (max-width: 48em){
    width: 80%;
    position: absolute;
  font-size: ${(props) => props.theme.fontlg};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin:0;
    padding: 2rem;
    font-weight: 600;

    backdrop-filter: blur(2px);
    background-color: ${props => `rgba(${props.theme.textRgba},0.4)`};
    border-radius: 20px;

  }

  @media (max-width: 25rem){
  font-size: ${(props) => props.theme.fontmd};
  }

`;
const Right = styled.div`
  width: 50%;

  img{
      width: 35%;
      bottom: 10%;
      position: absolute;
      height: auto;
      left: 60%;
      
  @media (max-width: 57em){
    display: none;
  }
  }
`;

const About = () => {
  return (
    <Section id='about'>
      <Title
                      initial={{ x: "-70px" }}
                      whileInView={{ x: 0 }}
                      viewport={{ once: false }}
                      transition={{
                        duration: 1.5,
                      }}
      >
        About Us
      </Title>
      <Left 
                            initial={{ x: "70px" }}
                            whileInView={{ x: 10 }}
                            viewport={{ once: false }}
                            transition={{
                              duration: 1.5,
                            }}
      >
      SURE Trust is an NGO that aims at enhancing the employability of educated 
unemployed rural youth through value-based 
skill upgradation in emerging technologies, 
with no cost to students.
        <br /> <br />
        SURE Trust TECH-TIC-TOE 1.0 intends to bring together educators,
        trainers, researchers, professionals, and students in order to inspire
        and disseminate knowledge amongst all.
        <br /> <br />
        We at SURE Trust will host a variety of diverse events, ranging from
        meet-ups, technical events, industrial visits and hackathons, to various
        non technical and fun-related activities, as part of this festival.
      </Left>
      <Right>
          <motion.img
        initial={{opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{
          duration: 1.5,
        }}
            src={poster} alt="about us" />
      </Right>
    </Section>
  );
};

export default About;
