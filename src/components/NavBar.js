import {React, useState} from 'react';
import styled  from "styled-components";
import {motion} from 'framer-motion';

const NavContainer = styled(motion.div)`
width: 100vw;
z-index: 20;
position: absolute;
top: ${props => props.click ? '0' : `-${props.theme.navHeight}`};
transition: all 0.3s ease;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 40em) {
    top: ${props => props.click ? '0' : `calc(-50vh - 4rem)`};
}
`

const MenuItems = styled(motion.ul)`
position: relative;
height: ${props => props.theme.navHeight};
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
list-style: none;

display: flex;
justify-content: space-around;
align-items: center;

width: 100%;
padding: 0 10rem;

@media (max-width: 40em) {
    flex-direction: column;
    padding: 2rem 0;
    height: 50vh;
}
`

const MenuBtn = styled.li`
background-color: ${props => `rgba(${props.theme.textRgba},0.9)`};
list-style-type: none;
color: ${props => props.theme.body};
width: 10rem;
height: 3.5rem;

font-size: ${props => props.theme.fontlg} !important;
clip-path: polygon(0 0, 100% 0%, 100% 50%, 50% 100%, 0% 50%);

position: absolute;
top: 100%;
left: 50%;
transform: translateX(-50%);

display: flex;
justify-content: center;
align-items: center;

font-size: ${props => props.theme.fontmd};
font-weight: 600;
text-transform: uppercase;

cursor: pointer;

@media (max-width: 40em) {
    width: 10rem;
    height: 2rem;
}
`

const MenuItem = styled.li`
text-transform: uppercase;
cursor: pointer;
color: ${props => props.theme.text};

@media (max-width: 40em) {
    flex-direction: column;
    padding: 0.5rem 0;
}
`

const NavBar = () => {
    const [click,setClick] = useState(false);
    const [click2, setclick2] = useState(false);

    const scrollTo = (id) => {
        let element = document.getElementById(id);
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        })
        setclick2(!click2);
      }

  return (
    <NavContainer click={click}
    initial={{
        y:'-100%'
    }}
    animate={{
        y:0
    }}
    transition={{
        duration:2,
        delay:1
    }}
    >
        <MenuItems
        drag="y"
        dragConstraints={{
            top: 0,
            bottom: 70,
        }}
        dragElastic={0.05}
        dragSnapToOrigin
        click={click2}
        >
        <MenuBtn onClick={() => setClick(!click)}>Menu</MenuBtn>
        <MenuItem
        whileHover={{scale: 1.1, y: -5}}
        whileTap={{scale: 0.09, y:0}}
        onClick={() => scrollTo('home')}
        >Home</MenuItem>
        <MenuItem
        whileHover={{scale: 1.1, y: -5}}
        whileTap={{scale: 0.09, y:0}}
        onClick={() => scrollTo('about')}
        >About Us</MenuItem>
        <MenuItem
        whileHover={{scale: 1.1, y: -5}}
        whileTap={{scale: 0.09, y:0}}
        onClick={() => scrollTo('events')}
        >Events</MenuItem>
        <MenuItem
        whileHover={{scale: 1.1, y: -5}}
        whileTap={{scale: 0.09, y:0}}
        onClick={() => scrollTo('team')}
        >Team</MenuItem>
        <MenuItem
        whileHover={{scale: 1.1, y: -5}}
        whileTap={{scale: 0.09, y:0}}
        >Brochure of the event</MenuItem>
        </MenuItems>
    </NavContainer>
  )
}

export default NavBar