import React from 'react';
import styled  from "styled-components";
import logo from '../assets/Images/logo.png';
import {motion} from 'framer-motion';

const Container = styled.section`
width: 100%;
top: 1rem;
left: 1rem;
position: absolute;
color: ${props => props.theme.text};
z-index: 5;
`

const Img = styled(motion.img)`
    width: 4rem;
    height: auto;
    overflow: visible;
`


export const Logo = () => {
    const textVariants = {
        hidden : {
            opacity: 0,
            x: -50,
        },
        visible: {
            opacity: 1,
            x: 5,
        
        transition: {
            duration: 2,
            ease: 'easeInOut'
        }
    },
    }
  return (
    <Container>
            <Img
             variants={textVariants}
             initial='hidden'
             animate='visible'
            src={logo} alt='logo' />
    </Container>
  )
}
