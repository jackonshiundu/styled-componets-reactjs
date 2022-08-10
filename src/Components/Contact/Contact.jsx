import React from 'react'
import { Button, Container, Heading, MainHeading, Section, SubHeading } from '../../Globalstyles'
import { ContactCollumn, ContactWrapper, Email, Form, Img, ImgWrapper, Message, Name } from './ContactStyle'
import Illustration from '../../Assets/illustration.svg'
const Contact = () => {
  return (
    <Section id='contact'>
        <MainHeading>Reach Out </MainHeading>
        <SubHeading align='center'>To Us</SubHeading>
      <ContactWrapper >
        <ContactCollumn>
            <ImgWrapper>
            <Img src={Illustration}>
            </Img>
            </ImgWrapper>
        </ContactCollumn>
        <ContactCollumn>
            <Form>
                <Name type='email' placeholder='Name'>

                </Name>
                <Email type='email' placeholder='Email'>

                </Email>
                <Message type='email' placeholder='Message...'>
                    
                </Message>
                <Button>Send</Button>
            </Form>
        </ContactCollumn>
      </ContactWrapper>
    </Section>
  )
}

export default Contact
