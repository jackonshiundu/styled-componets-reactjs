import React,{useState,useRef} from 'react'
import { Button, Container, Heading, Section } from '../../Globalstyles'
import { IconContext } from 'react-icons';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { ButtonWrapper, CorouselImage, ImageWrapper, ReviewSlider, TextWrapper, TopRow, TopRowWrapper } from './CorouselStyle';
import { data, sliderSettings } from '../../Data/CorouselData';

const Corousel = () => {
    const [sliderRef,SetSliderRef]=useState(null)
  return (
    <Section>
        <TopRow>
            <TopRowWrapper>
                <Heading>Find More About Us</Heading>
                <ButtonWrapper>
                 <IconContext.Provider value={{ size: '3rem', color: '#1d609c' ,cursor:'pointer'}}>
                    <FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
				    <FaArrowCircleRight onClick={sliderRef?.slickNext} />
                 </IconContext.Provider>

                </ButtonWrapper>
            </TopRowWrapper>
        </TopRow>
        <ReviewSlider {...sliderSettings} ref={SetSliderRef}>
            {
                data.map(({title,description,image},index)=>(
                    <ImageWrapper key={index}>
                    <CorouselImage src={image}/>
                    <TextWrapper mt='1rem' marginbottom='1rem' fw='700'>{title}</TextWrapper>
                    <TextWrapper mt='.5rem' marginbottom='1rem'> {description}</TextWrapper>
                    <Button>Learn More</Button>
                   </ImageWrapper>
                ))
            }
        </ReviewSlider>
    </Section>
  )
}

export default Corousel