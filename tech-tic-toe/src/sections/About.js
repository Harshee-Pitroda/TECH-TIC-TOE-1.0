import React from "react";
import styled from "styled-components";
import poster from '../assets/Images/abt.jpeg';

const Section = styled.section`
  position: relative;
  background-color: #000001;
  min-height: 100vh;
  width: 80vw;
  overflow: hidden;
  display: flex;
  margin: 0 auto;
`;
const Title = styled.h1`
  font-family: "Kaushan Script";
  font-size: ${(props) => props.theme.fontBig};
  font-weight: 300;
  color: ${(props) => props.theme.text};

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;
`;
const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  font-weight: 300;

  position: relative;
  z-index: 5;
  margin-top: 20%;
`;
const Right = styled.div`
  width: 50%;

  img{
      width: 35%;
      bottom: 10%;
      position: absolute;
      height: auto;
      left: 60%;
  }
`;

const About = () => {
  return (
    <Section id='fixed-target'>
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        About Us
      </Title>
      <Left data-scroll data-scroll-speed="2" data-scroll-direction='horizontal'>
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
          <img
          data-scroll data-scroll-speed="5"
            src={poster} alt="about us" />
      </Right>
    </Section>
  );
};

export default About;
