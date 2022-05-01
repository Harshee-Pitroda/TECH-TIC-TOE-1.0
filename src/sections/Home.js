import React from 'react'
import styled  from "styled-components";
// import CoverVideo from '../components/CoverVideo';
import HeroSection from '../components/Hero';
import { Logo } from '../components/Logo';
import NavBar from '../components/NavBar';

const Section = styled.section`
position: relative;
min-height: 100vh;
overflow: hidden;
`

export const Home = () => {
  return (
    <Section id="home">
        <HeroSection />
        <Logo />
        <NavBar />
    </Section>
  )
}
