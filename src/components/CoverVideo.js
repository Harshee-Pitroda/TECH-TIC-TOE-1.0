import React from 'react';
import styled  from "styled-components";
import MainVideo from '../assets/world.mp4';
import {motion} from 'framer-motion';

const VideoContainer = styled.section`
width: 100%;
height: 100vh;
position: relative;

video{
    width: 100%;
    height: 100vh;
    object-fit: cover;

    @media (max-width: 48em) {
        object-position: center 10%;
    }
}

@media (max-width: 30em) {
    object-position: center 50%;
}
`

const TitleTop = styled(motion.div)`
position: absolute;
top: -30%;
bottom: 0;
left: 0;
right: 0;
z-index: 5;
flex-direction: column;

display: flex;
justify-content: center;
align-items: center;
color: ${props => props.theme.text};


h1{
    font-family: 'Kaushan Script';
    font-size: ${props => props.theme.fontBig};
    text-shadow: 10px 10px 15px #E08793;
    @media (max-width: 88em) {
        font-size: calc(4rem + 4vw);
    }
    @media (max-width: 68em) {
        font-size: calc(3rem + 3vw);
    }
    @media (max-width: 48em) {
        font-size: calc(2rem + 2vw);
    }
    @media (max-width: 21em) {
        font-size: calc(1.5rem + 1.5vw);
    }
}

div{
    display: flex;
    flex-direction: row;
}
`

const Title = styled(motion.div)`
position: absolute;
top: 30%;
bottom: 0;
left: 0;
right: 0;
z-index: 5;
flex-direction: column;

display: flex;
justify-content: center;
align-items: center;
color: ${props => props.theme.text};

@media (max-width: 88em) {
    top: 0;
}

h1{
    font-family: 'Kaushan Script';
    font-size: ${props => props.theme.fontBig};
    text-shadow: 10px 10px 15px #E08793;
    @media (max-width: 88em) {
        top: 0;
        font-size: calc(4rem + 4vw);
    }
    @media (max-width: 68em) {
        top: 0;
        font-size: calc(3rem + 3vw);
    }
    @media (max-width: 48em) {
        top: 0;
        font-size: calc(2rem + 2vw);
    }
    @media (max-width: 21em) {
        top: 0;
        font-size: calc(1.5rem + 1.5vw);
    }
}

div{
    display: flex;
    flex-direction: row;
}
`
const container = {
    hidden : {
        opacity: 0,
    },
    show: {
        opacity: 1,
    
    transition: {
        delayChildren: 1,
        staggerChildren: 0.3,
    }
},
}

const item = {
    hidden : {
        opacity: 0,
    },
    show: {
        opacity: 1,
},
}

const CoverVideo = () => {
  return (
    <VideoContainer>
                <TitleTop 
        variants={container}
        initial='hidden'
        animate='show'
        >
            <div>
                <motion.h1 variants={item} >SURE</motion.h1>
                <motion.h1 variants={item} >&nbsp;Trust</motion.h1>
            </div>
        </TitleTop>
        <Title 
        variants={container}
        initial='hidden'
        animate='show'
        >
            <div>
                <motion.h1 variants={item} >TECH</motion.h1>
                <motion.h1 variants={item} >-TIC</motion.h1>
                <motion.h1 variants={item} >-TOE</motion.h1>
                <motion.h1 variants={item} >&nbsp;&nbsp;1.0</motion.h1>
            </div>
        </Title>
        <video src={MainVideo} type='video/mp4' autoPlay muted loop />
    </VideoContainer>
  )
}

export default CoverVideo