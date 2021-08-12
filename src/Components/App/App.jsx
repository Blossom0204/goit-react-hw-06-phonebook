import React from 'react'

import Container from '../Container/Container'
import ContactForm from '../ContactForm/ContactForm'
import ContactList from '../ContactList/ContactList'
import Filter from '../Filter/Filter'

export default function App() {
  return (
    <>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Container>
    </>
  )
}
