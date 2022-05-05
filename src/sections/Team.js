import React from 'react';
import styled from "styled-components";
import wave from "../assets/waves3.svg";

const Title = styled.h1`
  font-family: "Kaushan Script";
  font-size: ${(props) => props.theme.fontbb};
  font-weight: 300;
  color: #000001;
  margin-top: 5%;
  position: absolute;
  top: 5rem;
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

const Waves = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: -1rem;
`;

const AboutSection = styled.section`
  background-color: #966750;
  width: 100vw;
  min-height: 120vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Item = styled.div`
width: calc(30rem - 4vw);
padding: 1rem;
/* From https://css.glass */
background: rgba(255, 255, 255, 0.24);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(10.2px);
-webkit-backdrop-filter: blur(10.2px);

color: ${(props) => props.theme.text};
margin: 2rem 1rem 0;
position: relative;

border: 2px solid ${(props) => props.theme.text};
border-radius: 20px;
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

const Team = () => {
  return (
    <AboutSection id="team">
      <Waves src={wave} alt="" />
    <Title> Our Team </Title>
    <Container>
    <Item>
        <Name>Trustees and Governing Council Members</Name>
        <Description>
            <ul>
                <li><b>Prof. Radhakumari Challa</b> - Executive Director & Founder</li>
                <li><b>Ms. Vandana Nagesh</b> - Director & Co-Founder</li>
                <li><b>Ms. Krithika Ram</b> - Trustee</li>
                <li><b>Mr. Amar Vivek Aggarwal</b> - Trustee</li>
                <li><b>Mr. Ramachandran P</b> - Trustee</li>
                <li><b>Dr. SSR Kumar Challa</b> - Trustee</li>
                <li><b>Mr. Amaresh</b> - Trustee</li>
                <li><b>Mr. Sai Krishna Kanth</b> - Trustee</li>
                <li><b>Mr. V.J. Ramanan</b> - Sr. Governing Council</li>
                <li><b>Sri Chandramohan</b> - Sr. Governing Council</li>
                <li><b>Dr. C. Muralikrishna Kumar</b> - Sr. Governing Council</li>
                <li><b>Ms. G Usha</b> - Member – Governing Council</li>
                <li><b>Mrs. Vijayalakshmi Suresh</b> - Member – Governing Council</li>
                <li><b>Mrs. Sai Sudha Nunna</b> - Member – Governing Council</li>
            </ul>
        </Description>
    </Item>
    <Item>
        <Name>Organizing Committee</Name>
        <Description>
            <ul>
                <li><b>Harshee Pitroda</b> - Event Incharge and Co-ordinator</li>
                <li>Other head of departments to be announced soon !</li>
            </ul>
        </Description>
    </Item>
    </Container>
    </AboutSection>
  )
}

export default Team