import React from 'react'
import { Contact } from '../../models/contac'
import  ContactComponent from './contact'

const Contacts = () => {
    const ContactDefault = new Contact('enmanuel', 'marcano','enmanuel@gmail.com', true)
    console.log(ContactDefault)
  return (
   <ContactComponent contact={ContactDefault} />
  )
}


export default Contacts