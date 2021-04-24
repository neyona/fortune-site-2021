// frontend/src/components/pages/ConfirmContactPage.js
import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

import FortuneCuttlefishFloat from '../assets/FortuneCuttlefishFloat.png'

const ConfirmContactPage = () => {
  return (
    <div className="content-wrap">
      <Jumbotron className="jumbotron-contact-confirm">
        <h2>Your message has been sent.</h2>
        <br />
        <Container className="container-cuttlefish" fluid>
          <Image
            src={FortuneCuttlefishFloat}
            className="cuttlefish-animation"
            alt="A yellow Cuttlefish that is animated and is also the one that gives the fortunes."
            fluid
          />
        </Container>
      </Jumbotron>
    </div>
  )
}

export default ConfirmContactPage
