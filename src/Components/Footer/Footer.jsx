import React from 'react'
import { Section, SubHeading } from '../../Globalstyles'
import {footerData,footerSocialData} from '../../Data/FooterData'
import { Btn, FooterCopyRight, FooterLinks, FooterWrapper, Hr, Icon, IconMAinWrapper, IconWrapper, InputBox, LeftSide, LinkList, LinkListItem, LinksWrapper, RightSide, SubscribeWrapper } from './FooterStyle'
const Footer = () => {
  return (
        <FooterWrapper id='footer'>
            <FooterLinks>
                <LeftSide>
                    {
                        footerData.map(({title,links},index)=>(
                            <LinksWrapper key={index}>
                                <SubHeading>{title}</SubHeading>
                                <LinkList>
                                     {
                                        links.map((link,index)=>(
                                        <LinkListItem key={index}>
                                           {link}
                                        </LinkListItem>
                                        ))
                                     }
                                </LinkList>
                            </LinksWrapper>
                        ))
                    }
                </LeftSide>
                <RightSide>
                    <IconMAinWrapper>
                        {
                            footerSocialData.map(({icon},index)=>(
                                <IconWrapper key={index}>
                                    <Icon>{icon}</Icon>
                                </IconWrapper>

                            ))
                        }
                    </IconMAinWrapper>
                    <SubscribeWrapper>
                        <InputBox placeholder='Email...'/>
                        <Btn>Subscribe</Btn>
                    </SubscribeWrapper>
                </RightSide>

            </FooterLinks>
            <FooterCopyRight>
               Jaguar Solutions &copy; 2022
            </FooterCopyRight>
        </FooterWrapper>
  )
}

export default Footer