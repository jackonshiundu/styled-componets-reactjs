import React from 'react'
import { pricingData } from '../../Data/Pricingdata'
import { Heading, Section, SubHeading,MainHeading, Button } from '../../Globalstyles'
import { Featurecard, PlanAMount, PlanButton, PlanFeatures, PlanNumberOfAccounts, PlanPeriod, PlanPrice, PlanTitle, PriceHeading, PricingPlanCard, PricingPlansHeader, PricingWraper } from './PricingStyles'

const Pricing = () => {
  return (
    <Section>
        <PricingWraper id='pricing'>
            <MainHeading>Take a look At our Pricing</MainHeading>
            <SubHeading align='center'>Plans</SubHeading>
            <PriceHeading>Pricing</PriceHeading>
            <PricingPlansHeader>
              {
                pricingData.map(({title,price,period,numAcc,features},index)=>(
                  <PricingPlanCard key={index}>
                     <PlanTitle>
                      {title}
                     </PlanTitle>
                     <PlanPrice>
                      <PlanAMount>
                        {price}
                      </PlanAMount>
                      <PlanPeriod>
                        {period}
                      </PlanPeriod>
                     </PlanPrice>
                     <PlanNumberOfAccounts>
                       {numAcc}
                     </PlanNumberOfAccounts>
                     <Featurecard>
                      {features.map((feature,index)=>(
                        <PlanFeatures key={index}>
                          {feature}
                        </PlanFeatures>
                      ))
                      }
                     </Featurecard>
                     
                     <PlanButton>Get Plan</PlanButton>
                  </PricingPlanCard>
                ))
              }
            </PricingPlansHeader>
        </PricingWraper>
    </Section>
  )
}

export default Pricing