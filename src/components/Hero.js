import styled, { keyframes } from "styled-components";
import Mobile from "../assets/first.gif";

const move = keyframes`
0% { transform: translateY(-5px)  }
    50% { transform: translateY(10px) }
    100% { transform: translateY(-5px) }
`;

const HomeSection = styled.section`
width: 100%;
height: 100vh;
  background-color: #B59AF6;
  display: flex;
  justify-content: center;
  position: relative;
`;

const MainContent = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`;

const MobileSvg = styled.img`
  max-width: 100%;
  width: calc(30% + 20vw);
  height: auto;
  z-index: 7;
  animation: ${move} 2.5s ease infinite;
  @media only Screen and (max-width: 48em) {
    align-self: flex-start;
    position: absolute;
    bottom: 0;
    width: calc(30% + 20vw);
    opacity: 0.5;
  }
  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;

const Lb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  color: #fff;
  position: relative;
  font-family: 'Kaushan Script';
  text-shadow: 10px 10px 15px #35353F;
  z-index: 15;
  @media only Screen and (max-width: 48em) {
    width: 80%;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    margin-top: calc(2.5rem + 2.5vw);
    filter: drop-shadow(2px 4px 6px black);
  }
  @media only Screen and (max-width: 40em) {
    filter: none;
  }
`;

const Topic = styled.span`
  display: flex;
  margin-left: 5%;
  font-family: 'Sirin Stencil';
  align-items: center;
  justify-content: center;
  background-color: #35353F;
  color: #fff;
  font-size: calc(0.7rem + 0.4vw);
  padding: 0.5rem 1rem;
  border-radius: 20px;
`;

const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: #803BEC;
  margin-right: 0.5rem;
`;

const Title = styled.h1`
  font-size: calc(3rem + 1vw);
  line-height: 1.2;
  padding: 0.5rem 0;
`;

const Title2 = styled.h1`
  font-size: calc(3rem + 1vw);
  margin-left: 15%;
  line-height: 1.2;
  padding: 0.5rem 0;
`;

const HeroSection = () => {
  return (
    <HomeSection>
      <MainContent id="home">
        <Lb id="leftBlock">
          <Title2>SURE Trust</Title2>
          <Title>TECH-TIC-TOE 1.0</Title>
          <br />
          <Topic>
            <Circle />
            <span>Participate in various competitions to win exciting rewards!</span>
          </Topic>
          <br />
          <Topic>
            <Circle />
            <span>Learn a ton of skills with the best events and competitions!</span>
          </Topic>
          <br />
          <Topic>
            <Circle />
            <span>All work and enjoyment at one place - Join us at this fest !</span>
          </Topic>
        </Lb>

        <MobileSvg
          src={Mobile}
          alt="Mobile Svg"
          srcset=""
          width="400"
          height="400"
        />
      </MainContent>
    </HomeSection>
  );
};

export default HeroSection;