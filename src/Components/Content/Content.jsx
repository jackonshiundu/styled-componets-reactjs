import React,{useEffect} from 'react'
import { Button, Heading, MainHeading, Section, SubHeading } from '../../Globalstyles'
import { ContentColumn, ContentHeader, ContentRow, ContentWrapper, Description, Img, ImgWrapper } from './ContentStyle'
import Deal from '../../Assets/Deal.svg'
const Content = ({
    topLine,
    headline,
    description,
    buttonLabel,
    img,
    reverse,
    inverse,
}
) => {

  return (
    <Section >
       <ContentWrapper>
            <ContentRow reverse={reverse}>
                <ContentColumn>
                    <ContentHeader 

                    >
                        {topLine.text}
                    </ContentHeader>
                    <SubHeading

                    align='start'>
                        {headline}
                    </SubHeading>
                    <Description

                    >
                        {description}
                    </Description>
                    <Button>
                        {buttonLabel}
                    </Button>
                </ContentColumn>
                <ContentColumn>
                    <ImgWrapper>
                       <Img src={Deal}
                       		whileHover={{ rotate: 2, scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                       />
                    </ImgWrapper>
                </ContentColumn>
            </ContentRow>
       </ContentWrapper>
    </Section>
  )
}

export default Content
