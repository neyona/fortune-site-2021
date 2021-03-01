// fortune_docker/frontend/src/components/pages/ContactPage.js
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ContactForm from '../contact/ContactForm';

// this is a wrapper for the contact form. The titles are on this page.
function ContactPage() {
  return (
    <div className="content-wrap">
      <Jumbotron className="jumbotron-page-alt-contact">
        <h1>Contact Form <FontAwesomeIcon icon={['fas', 'feather-alt']} /></h1>
        <hr />
        <h2>To send a message to the Fortune Cuttlefish or the human programmer of this site, fill out and submit this contact form.</h2 >
        <ContactForm endpoint="bard-api/v1/" />
      </Jumbotron>
    </div>
  );
}

export default ContactPage;
