import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contac'

const ContactComponent = ({contact}) => {
    console.log(contact, 'en contact')
  return (
    <div>
        <h1>Contacto</h1>
        <div className='information'>
           <p>Nombre: {contact.name}</p>
           <p>Apellido: {contact.lastName}</p>
           <p>Correo: {contact.email}</p>
           <p>Conexión: {contact.isConected ? 'Contacto En Línea.' : 'Contacto No Disponible.'}</p>
        </div>
        

    </div>
  )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default ContactComponent