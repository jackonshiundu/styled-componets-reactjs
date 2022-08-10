import React from 'react'
import { Button, Heading,  Section, SubHeading } from '../../Globalstyles'
import HeroVideo from '../../Assets/hero.mp4'
import { ButtonWrapper, HeroMainHeader, HeroSection, Herovideo, HeroWrapper, Searchinput, SignButton } from './HeroStyle'
const Hero = () => {
  return (

      <HeroSection >
      <Herovideo src={HeroVideo} autoPlay/>
        <Searchinput typeof='search' placeholder='Type to search...'></Searchinput>
        <HeroMainHeader>Get your website and Comapany sytem ready free from Hackers</HeroMainHeader>
        <SubHeading align='center'>
          By Subscribing to our serivices
        </SubHeading>
        <ButtonWrapper>
           <Button>Log in</Button>
           <SignButton>Sign in</SignButton>
        </ButtonWrapper>
      </HeroSection>
  )
}

export default Hero