import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';

const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
width: 100%;
color: ${props => props.theme.text};
align-self: flex-start;
@media (max-width: 70em) {
  font-size: ${props => props.theme.fontxl};
}
`
const Typex = styled.h2`
text-transform: capitalize;
font-family: cursive;
color: black;
`

const Typer = () => {
  return (
    <Title>
        <Typex><Typewriter
  options={{
    strings: ['participate','learn','grow'],
    autoStart: true,
    loop: true,
  }}
/></Typex>
    </Title>
  )
}

export default Typer