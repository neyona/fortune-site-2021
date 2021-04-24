// frontend/src/components/pages/HomePage.js
import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Figure from 'react-bootstrap/Figure'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FortuneForm from '../fortune/FortuneForm'
import ToggleDyslexiaSwitch from '../buttons/ToggleDyslexiaSwitch'
import { useDyslexiaTheme } from '../buttons/useDyslexiaTheme'

import FirstPageCuttleFishEye from '../assets/FirstPageCuttlefishEye.jpg'

const HomePage = () => {
  // The Dyslexia Toggle Hook
  const { isDyslexia, toggleDyslexiaTheme } = useDyslexiaTheme()
  return (
    <div>
      <Jumbotron className="jumbotron-homepage">
        <Container>
          <Row>
            <Col xs={12} sm={5} className="element-wrapper">
              <Figure>
                <Figure.Image
                  width={300}
                  height={400}
                  alt="A Cuttlefish eye close up from the side"
                  src={FirstPageCuttleFishEye}
                  className="img"
                />
                <Figure.Caption className="figure-caption-custom">
                  It's me, the Fortune Giver
                </Figure.Caption>
              </Figure>
            </Col>

            <Col xs={12} sm={7}>
              <h1>
                Hello I am the Underwater Fortune Giver. Would you like some
                guidance by way of a fortune . . .{' '}
              </h1>
            </Col>
          </Row>

          <Row>
            <Container>
              <p>
                . . . Are you feeling brave? If you would like your fortune,
                please enter your name or a fake name of your choosing (letters,
                spaces, and hyphens only please), and choose the CURRENT color
                of your aura.
              </p>
              <br />
            </Container>
          </Row>

          <Row>
            <Container className="container-center">
              <h1 className="special-title">THEN PUSH THE BUTTON!</h1>
            </Container>
          </Row>

          <Row>
            <Container className="container-center">
              <FortuneForm />
            </Container>
          </Row>

          <br />

          <Container>
            <h2>About this Site</h2>
            <p>
              This is a demo site for a fortune telling cuttlefish and her
              friend who is a human programmer. She (the programmer, not the
              cuttlefish) is looking for more work. For more information go to
              the{' '}
              <a href="/about" rel="noopener noreferrer">
                <u>About Page</u>
              </a>{' '}
              and to contact her or the cuttlefish go to the
              <a href="/contact" rel="noopener noreferrer">
                <u>Contact Page</u>{' '}
                <FontAwesomeIcon icon={['fas', 'feather-alt']} />
              </a>
              .
            </p>
          </Container>

          <br />

          <Container>
            <h2>Dyslexia Friendly</h2>
            <p>
              You can toggle the following switch to change the whole site,
              except for the navigation bar, to the Open Dyslexic font.
            </p>
            <ToggleDyslexiaSwitch
              isDyslexia={isDyslexia}
              onChange={toggleDyslexiaTheme}
            />
          </Container>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default HomePage
