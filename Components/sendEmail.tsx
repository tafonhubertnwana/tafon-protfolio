'use server'
import React from "react";
import { Resend } from "resend";
import ContactFormEmail from "@/app/emails/welcome";

const resend = new Resend(process.env.RESEND_API_KEY);

// add to utils file
const getErrorMessage = (error: unknown): string  => {
  let message: string;
  if (error instanceof Error){
      message = error.message
  } else if( error && typeof error === 'object' && 'message' in error) {

      message = String(error.message)

  }else if(typeof error === 'string'){
    message = error;
  }else{
    message = 'Something went wrong';
  }

  return message;
}

const validateString = (value: unknown) => {
  if (!value || typeof value !== 'string' ){
    return false

  }
  return true
}


export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail')
  const senderName = formData.get('senderName')
  const message = formData.get('message')


  // Validate the data
  if(!validateString(senderName)){
    return { error: 'Invalid name' }  
  }
  
  if (!validateString(senderEmail)) {
    return { error: 'Invalid email' }
  }

  if(!validateString(message)) {
    return { error: 'Invalid message' }
  }
  
  new Error('message')

  try{
    await resend.emails.send({
    from: 'Contact From <onboarding@resend.dev>',
    to: 'tafonsoftwarespecialist@gmail.com',
    subject: 'Welcome and Thank you',
    replyTo: senderEmail as string,
    react: React.createElement(ContactFormEmail, {
      message: message as string,
      senderEmail: senderEmail as string,
      senderName: senderName as string
    })
    
  })
  } catch (error: unknown){
    return {
      error: getErrorMessage(error)
    }
  }

}
