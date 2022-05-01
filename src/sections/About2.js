import styled, { keyframes } from "styled-components";
import wave from "../assets/waves.svg";
import rocket from "../assets/second2.gif";
import human from "../assets/third.png";
import { motion } from "framer-motion";

const move = keyframes`
0% { transform: translateY(-5px)         }
    50% { transform: translateY(10px) translateX(10px)        }
    100% { transform: translateY(-5px)         }
`;

const AboutSection = styled.section`
  background-color: #C8FF93;
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Waves = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: -1rem;
`;

const Main = styled.div`
  margin: 0 15rem;
  margin-top: 15rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media only Screen and (max-width: 64em) {
    margin: 0 calc(5rem + 5vw);
    margin-top: 10rem;
  }
  @media only Screen and (max-width: 40em) {
    align-items: center;
    margin: 3rem calc(3rem + 3vw);
  }
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-family: "Kaushan Script";
  display: inline-block;
`;

const CurvedLine = styled.div`
  width: 10rem;
  height: 2rem;
  border: solid 5px #027F82;
  border-color: #027F82 transparent transparent transparent;
  border-radius: 150%/60px 70px 0 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only Screen and (max-width: 40em) {
    flex-direction: column;
  }
`;

const Rocket = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 50%;
  padding-bottom: 5rem;
  animation: ${move} 2.5s ease infinite;
  img{
    width: 50rem;
  }
  @media only Screen and (max-width: 40em) {
    width: 50vw;
    padding-bottom: 0;
  }
`;

const Human = styled.div`
  width: 50%;
  position: absolute;
  right: 0;
  bottom: 100%;
  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;
const Text = styled(motion.h4)`
  font-size: calc(0.5rem + 1vw);
  line-height: 1.5;
  color: #3F3D56;
`;
const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: black;
  margin-right: 0.5rem;
  margin-top: 1rem;
`;
const AboutText = styled.div`
  width: 50%;
  position: relative;
  @media only Screen and (max-width: 40em) {
    width: 100%;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Waves src={wave} alt="" />
      <Main>
        <div>
          <Title
                                initial={{ x: "-70px" }}
                                whileInView={{ x: 0 }}
                                viewport={{ once: false }}
                                transition={{
                                  duration: 1.5,
                                }}
          >About Us</Title>
          <CurvedLine />
        </div>
        <Content>
          <Rocket>
            <img src={rocket} alt="" width="400" height="400" />
          </Rocket>
          <AboutText>
            <Human>
              <img src={human} alt="" width="400" height="400" />
            </Human>

            <Text
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
        We at TECH-TIC-TOE 1.0 will host a variety of diverse events, ranging from
        meet-ups, technical events, industrial visits and hackathons, to various
        non technical and fun-related activities, as part of this festival.
            </Text>
            <div>
              <Circle style={{ backgroundColor: "#803BEC" }} />
              <Circle style={{ backgroundColor: "#E5A1F8" }} />
              <Circle style={{ backgroundColor: "#0A0810" }} />
            </div>
          </AboutText>
        </Content>
      </Main>
    </AboutSection>
  );
};

export default About;