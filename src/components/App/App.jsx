import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Container } from './App.styled';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList.jsx';
import { Filter } from 'components/Filter/Filter';

export const App = () => {
  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>

      <ToastContainer position="top-right" autoClose={3000} />
    </Container>
  );
};
