import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import img1 from "../assets/Images/1.png";
import img2 from "../assets/Images/2.png";
import img3 from "../assets/Images/3.png";
import img4 from "../assets/Images/4.png";
import img5 from "../assets/Images/5.png";
import img6 from "../assets/Images/6.png";
import img7 from "../assets/Images/7.png";
import img8 from "../assets/Images/8.png";
import img9 from "../assets/Images/9.png";
import img10 from "../assets/Images/10.png";
import img11 from "../assets/Images/11.png";
import wave from "../assets/waves2.svg";


const Section = styled.section`
  background-color: #FFBCBC;
  position: relative;
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  margin: 0 auto;
`;

const Container = styled.div`
  position: relative;
  z-index: 5;
  margin-top: 20% !important;
  width: 70%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  color: #fff;
`;

const Item = styled.div`
width: calc(30rem - 4vw);
padding: 1rem;
background-color: #B21835;

color: ${(props) => props.theme.text};
margin: 2rem 1rem 0;
position: relative;

border: 2px solid ${(props) => props.theme.text};
border-radius: 20px;
}
`;

const ImageContainer = styled.div`
  width: 15rem;
  margin-left: 20%;

  border-radius: 20px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
  }
`;
const Name = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.text};
  margin-top: 1rem;
`;
const NameM = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.text};
  margin-top: 1rem;
`;
const Description = styled.h2`
  font-size: ${(props) => props.theme.fontmd};
  text-align: justify;
  text-justify: inter-word;
  margin: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 400;
`;

export const NavBtnLink = styled.button`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  margin-left: 40%;
  margin-top: 7px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontmd};
  font-family: Sirin Stencil;
  text-decoration: none;
`;

const EventComponent = ({ img, name = " ", type=" ", part =" ", description = " ", reg = " ", address = ' ' }) => {
  return (
    <Item>
      <ImageContainer>
        <motion.img
                initial={{ x: "-70px" }}
                whileInView={{ x: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 1.5,
                }}
        src={img} alt={name} />
      </ImageContainer>
      <NameM
      style={{color: '#20F7F7',
    }}
      >{name}</NameM>
      <Name
      style={{color: '#F6F703',margin: '0'}}
      >Type of event: {type}</Name>
      <br />
      <Name
      style={{color: '#fff', margin: '0'}}
      >Participation: {part}</Name>
      <br />
      <Description
      style = {{margin: '0'}}
      >{description}</Description>
      <Name
      style={{color: '#00F73E'}}
      >
              <a
              href={address}
              target="_blank"
              rel="noreferrer"
            >
              {reg}
            </a>
      </Name>
      <NavBtnLink>
      <a
              href="https://suretrustforruralyouth.com"
              target="_blank"
              rel="noreferrer"
            >
              Register
            </a>
      </NavBtnLink>
    </Item>
  );
};

const Waves = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: -1rem;
`;

const Title = styled.h1`
  font-family: "Kaushan Script";
  font-size: ${(props) => props.theme.fontBig};
  font-weight: 300;
  color: #000001;

  position: absolute;
  top: 5rem;
  left: 35%;
  z-index: 5;

  @media (max-width: 88em) {
    font-size: calc(4rem + 4vw);
}
@media (max-width: 48em) {
    font-size: calc(3rem + 3vw);
    top: 0rem;
    z-index: 5;
}
@media (max-width: 21em) {
    font-size: calc(2rem + 2vw);
    margin-top: -10%;
}
`;

const Events = () => {
  return (
    <Section id="events">
      <Waves src={wave} alt="" />
      <Title>
        Events
      </Title>
      <Container>
        <EventComponent
          img={img1}
          name="Lakshya"
          type="Technical"
          part="Individual"
          description="The participants have to diagnose a 
societal problem on their own, further, they have to identify 
and ideate the most viable solution. They will not be required to code their 
prototype; they just have to present their unique solution to the societal 
problem they diagnosed through a PPT presentation.The ppt presentation must include 3-15 slides. The best idea will be awarded and participation certificates will be given to all."
          reg=""
        />
        <EventComponent
          img={img2}
          name="Techwik Quest"
          type='Technical'
          part='TEAM SIZE - 3 members (if you do not have a group we will give you a group.)'
          description="This is a technical quiz containing 2 rounds. Each 
of the rounds will contain technical questions with a specific time limit to solve them. 
After the completion of round 1 the top competiting teams will be taken for the next round 
- round 2. After the round 2 the winners will be declared based on their scores 
obtained and participation certificates will be awarded to all the participants."
          reg=""
        />
        <EventComponent
          img={img3}
          type="Technical"
          name="Industrial Visits"
          part="Individual"
          description="SURE Trust will organize virtual industry visits, which is a virtual tour that 
students take into various companies and industrial plants to learn about 
the procedures and work that takes place there. These visits are 
instructive for students interested in pursuing careers in fundamental 
fields and provide them a peek of what lies ahead. The details of the industrial visit will be revealed soon"
        />
        <EventComponent
          img={img4}
          name="SURE-A-THON"
          address='https://suretrustforruralyouth.com'
          part='TEAM SIZE - 3 members (if you do not have a group we will give you a group.)'
          type="Technical"
          description="The Multi-Domain SURE-A-THON is a way for tech enthusiasts and 
students to interact and learn from one another. In a nutshell, it's a 
hackathon, organised in a structured way with the purpose to propose 
solutions to pressing societal problems."
          reg="Click Here to view the rules and regulations"
        />
        <EventComponent
          img={img5}
          name="Kala-Kriti"
          type="Non Technical"
          part="Individual"
          description=" Kala-Kriti art competition is open to art lovers where the 
          participants need to choose a specific theme from the given themes and 
          can draw/paint in a given time frame. The participants can present their 
          art work to the jury and they would assess the work and declare winners. 
          Participation certificates would be given to all participants. Themes for the competition will be released at the start of the competition.
          Participants need to complete their art work in the given time frame and submit their work
          "
        />
        <EventComponent
          img={img6}
          name="Digi-Vigyapan"
          type="Non Technical"
          part="Individual"
          description="Digi-Vigyapan is an advertisement making competition. Participants 
          must create advertisements, which might be in the form of video 
          advertising, pamphlets, brochures, or posters. The topics will be 
          announced, and participants need to select their preferred topic. The 
          participants can even create logos for their brand. The participants will 
          then present the ad to the jury who would assess their work and declare 
          the winners. Participation certificates would be given to all participants.
          "
        />
        <EventComponent
          img={img7}
          name="Open-Mic"
          type="Non Technical"
          part="Individual"
          description="Open-Mic is an event where participants may show off their 
          skills. Participants can sing, present a Shayri/poem, monologue, mimicry
          or show their creative side. Initially, a Google form will be shared where 
          users will be asked to submit their preferred performance. The contestants 
          will be judged by a jury. Participation certificates would be given to all 
          participants.
          "
        />
        <EventComponent
          img={img8}
          name="Fun-a-Thon"
          type="Entertrainment"
          part="Individual"
          description="Fun-a-Thon is a guessing game in which players must guess 
          the movie, series, cartoon, conversation, brand and so on that will be 
          delivered to them in gibberish, Emojis, or any other format. Teams must 
          guess the answers and will be awarded points depending on their 
          guesses. The team with the most points will be declared the winner. 
          Everyone will get a certificate of participation"
        />
        <EventComponent
          img={img9}
          name="Zeal-a-Wheel"
          type="Entertrainment"
          part="Individual"
          description="Zeal-a-Wheel is an individual gaming activity in which the 
          organising team will virtually spin a wheel with a variety of fun-filled 
          games and tasks for each player. For the participants, this event will be entertaining, 
          challenging, and gratifying.
          "
        />
        <EventComponent
          img={img10}
          name="Magifun-Magnified"
          type="Entertrainment"
          part="Individual"
          description=" Magifun-Magnified is a two-round random object or sound 
          evaluating game in which a little portion of an image is magnified on the 
          screen in the first round. Participants must identify the object in the image. The second round will be a sound gauging 
          game, in which the participants will hear a random noise, and they must identify the activity underlying 
          that sound.
          "
        />
        <EventComponent
          img={img11}
          name="Tambola"
          type="Entertrainment"
          part="Individual"
          description="Tambola/Housie is a fun game in which the players receive 
          their game tickets prior to the game. The rules, regulations, and prizes 
          will be announced. The numbers will be announced virtually by the host, 
          and participants will mark off the numbers on their tickets as they are 
          called. A player wins if they can mark off all the numbers on their ticket 
          first.
          "
        />
      </Container>
    </Section>
  );
};

export default Events;
