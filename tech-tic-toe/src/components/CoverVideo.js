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
}
`

const Title = styled(motion.div)`
position: absolute;
top: 0;
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
    text-shadow: 10px 10px 15px #3A6888;
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
        <Title 
        variants={container}
        initial='hidden'
        animate='show'
        >
            <div>
                <motion.h1 variants={item}  data-scroll data-scroll-delay="0.13" data-scroll-speed="4">TECH</motion.h1>
                <motion.h1 variants={item}  data-scroll data-scroll-delay="0.09" data-scroll-speed="4">-TIC</motion.h1>
                <motion.h1 variants={item}  data-scroll data-scroll-delay="0.06" data-scroll-speed="4">-TOE</motion.h1>
                <motion.h1 variants={item}  data-scroll data-scroll-delay="0.04" data-scroll-speed="4">&nbsp;&nbsp;1.0</motion.h1>
            </div>
        </Title>
        <video src={MainVideo} type='video/mp4' autoPlay muted loop />
    </VideoContainer>
  )
}

export default CoverVideo