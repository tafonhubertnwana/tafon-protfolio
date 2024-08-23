import React from 'react'
import {Html, Body, Head, Heading, Hr, Container, Preview, Section, Text} from '@react-email/components'
import {Tailwind} from '@react-email/tailwind'

type ContactFormEmailProps = {
  message: string
  senderEmail: string
  senderName: string
}
export default function ContactFormEmail({
  message, senderEmail, senderName
} : ContactFormEmailProps){
  return <Html>
    <Head />
    <Preview>New Message from Contact Form</Preview>
    <Tailwind>
      <Body className='bg-gray-100 text-black'>
      <Container >
        <Section className='bg-white borderBlack my-10 px-10 py-4 rounded-md'>
          <Heading className='leading-tight'>New Message from Contact Form</Heading>
          <Text>Message:</Text>
          <Text>{message}</Text>
          <Hr />  
          <Text>The sender&#39;s email is: {senderEmail}</Text>
          <Text>The sender&#39;s name is: {senderName}</Text>
        </Section>
      </Container>
    </Body>
    </Tailwind >
  </Html>
}
