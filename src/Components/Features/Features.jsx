import React from 'react'
import { Button, MainHeading, Section, SubHeading } from '../../Globalstyles'
import { FeatureData } from '../../Data/FeatureData'
import { FeatureCard, FeatureCardWrapper, FeatureImageWrapper, FeatureName, FeatureText, FeatureWrapper } from './FeaturesStyle'
const Features = () => {
    const initial={
        y:40,
        opacity:0,
    }
    const animate={
        y:0,
        opacity:1,

    }
  return (
    <Section>
        <FeatureWrapper id='features'>
            <MainHeading>Click To learn more about</MainHeading>
            <SubHeading>What we offer</SubHeading>
            <FeatureCardWrapper>
                    {
                        FeatureData.map(({icon,name,description},index)=>(
                            <FeatureCard
                                initial={initial}
                                animate={animate}
                                key={index}>
                                <FeatureImageWrapper>
                                {icon}
                            </FeatureImageWrapper>
                            <FeatureName>
                                {name}
                            </FeatureName>
                            <FeatureText>
                                {description}
                            </FeatureText>
                            <Button>Learn More</Button>
                            </FeatureCard>
                        ))
                    }
            </FeatureCardWrapper>
        </FeatureWrapper>
    </Section>
  )
}

export default Features