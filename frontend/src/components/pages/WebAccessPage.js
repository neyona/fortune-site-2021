// frontend/src/components/fortune/OneFortune.js
import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ToggleDyslexiaSwitch from '../buttons/ToggleDyslexiaSwitch'
import { useDyslexiaTheme } from '../buttons/useDyslexiaTheme'

const WebAccessPage = () => {
  // The dyslexia toggle hook
  const { isDyslexia, toggleDyslexiaTheme } = useDyslexiaTheme()

  return (
    <div className="content-wrap">
      <Jumbotron className="jumbotron-page-alt">
        <h1>Web Access Policy</h1>
        <hr />
        <p>
          If you need assistance fill out the{' '}
          <a href="/contact" rel="noopener noreferrer">
            <u>Contact Form</u>{' '}
            <FontAwesomeIcon icon={['fas', 'feather-alt']} />
          </a>{' '}
          and a cuttlefish or human will get back to you soon. Making sure this
          site is accessible to everyone including those of us with disabilities
          is very important. We are working to be more inclusive and strive to
          make it more ADA (American Disabilities Act) compliant.
        </p>

        <p>The following are some of the ways the site complies.</p>
        <ul>
          <li>All images have alternative (alt) text.</li>
          <li>
            The site is set up to be optimized for screen readers by using
            proper headings.
          </li>
          <li>This site can be navigated with a keyboard only.</li>
          <li>
            Most of the text on the site except for the navigation bar at the
            top can be switched to the Open Dyslexic font.
          </li>
        </ul>

        <hr />

        <h2>
          You can toggle the following switch to change the whole site to the
          Open Dyslexic font, except for the Navigation Bar
        </h2>
        <ToggleDyslexiaSwitch
          isDyslexia={isDyslexia}
          onChange={toggleDyslexiaTheme}
        />

        <p>
          You can find the Open Dyslexic Site where the font came from here,
          note, this link does open to a new tab:
        </p>
        <p>
          <a
            href="https://opendyslexic.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={['far', 'eye']} size="lg" />{' '}
            <u>Open Dyslexic Site</u>
          </a>
        </p>
      </Jumbotron>
    </div>
  )
}

export default WebAccessPage
