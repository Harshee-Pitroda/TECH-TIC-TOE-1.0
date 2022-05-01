import {React, useState} from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../assets/Images/logo.png";

const Section = styled.section`
  position: relative;
  background-color: #829CD4;
  min-height: 100vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5rem auto;
  color: ${(props) => props.theme.text};
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 10vw;
    height: auto;
  }
`;

const FooterComponent = styled(motion.footer)`
  width: 80vw;
  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};
  }

  li {
    padding: 2rem;
    font-size: ${(props) => props.theme.fontlg};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Bottom = styled.div`
  padding: 0.5rem 0;
  margin: 0 4rem;
  font-size: ${(props) => props.theme.fontlg};

  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: underline;
  }

  @media (max-width: 48em) {
    flex-direction: column;
    span{
      margin: 1rem;
    }
}
`;

const Footer = () => {
    const [click, setclick] = useState(false);

    const scrollTo = (id) => {
      let element = document.getElementById(id);
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })
      setclick(!click);
    }
  return (
    <Section>
      <LogoContainer>
        <img src={logo} alt="logo" />
      </LogoContainer>
      <FooterComponent
        initial={{ y: "-400px" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 1.5,
        }}
      >
        <ul click={click}>
          <li onClick={() => scrollTo('home')} >home</li>
          <li onClick={() => scrollTo('about')}>about</li>
          <li onClick={() => scrollTo('events')} >events</li>
          <li onClick={() => scrollTo('home')} >Brochure of the event</li>
          <li>
            <a
              href="https://suretrustforruralyouth.com"
              target="_blank"
              rel="noreferrer"
            >
              SURE Trust
            </a>
          </li>
        </ul>
        <Bottom>
          <span
          >
            Illustration by Icons 8 from Ouch!
          </span>
          <span
          >
            For any queries contact: 9440045717 / 9137093968
          </span>
          <span
          >
            Website made by &nbsp;{" "}
            <a
              href="https://www.linkedin.com/in/harshee-pitroda-790778212/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Harshee Pitroda{" "}
            </a>
          </span>
        </Bottom>
      </FooterComponent>
    </Section>
  );
};

export default Footer;
