import styled, { keyframes } from "styled-components";
import Mobile from "../assets/first3.gif";

const move = keyframes`
0% { transform: translateY(-5px)  }
    50% { transform: translateY(10px) }
    100% { transform: translateY(-5px) }
`;

const HomeSection = styled.section`
width: 100%;
height: 100vh;
background-image: linear-gradient(to bottom, #bfabe1, #bcaee2, #b9b0e3, #b6b3e3, #b4b5e3, #b0b9e6, #adbce8, #aac0ea, #a4c6ed, #9fccf0, #9bd2f0, #99d7f0);
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
  color: #35353F;
  position: relative;
  font-family: 'Kaushan Script';
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

const GameContainer = styled.div`
margin: 0 auto;
display: grid;
grid-template-columns: 33% 33% 33%;
grid-template-rows: 33% 33% 33%;
max-width: 300px;
background-color: #000001;
color: #fff;
`
const Cell = styled.div`
background-color: #000001;
font-family: 'Kaushan Script';
text-align: center;
    border: 1px solid white;
    min-width: 100px;
    min-height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${(props) => props.theme.fontxl};
    cursor: pointer;
`

const Title2 = styled.h1`
color: #000001;
  font-size: calc(5.5rem + 1vw);
  line-height: 1.2;
  padding: 0.5rem 0;
`;

const HeroSection = () => {
  return (
    <HomeSection>
      <MainContent id="home">
        <Lb id="leftBlock">
          <Title2>SURE Trust</Title2>
          <GameContainer>
            <Cell>TECH</Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell>TIC</Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell>TOE</Cell>
          </GameContainer>
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