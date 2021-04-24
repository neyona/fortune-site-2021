// frontend/src/components/pages/AboutPage.js
import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Meg_Avatar from '../assets/Meg_Avatar.jpg'
import MBD_KM_Top_of_Airplane from '../assets/MBD_KM_Top_of_Airplane.jpg'
import MDB_KM_Castle from '../assets/MDB_KM_Castle.jpg'
import BookCoverOverGradient from '../assets/BookCoverOverGradient.jpg'
import RedbubbleCuttlefish from '../assets/RedbubbleCuttlefish.jpg'

const AboutPage = () => {
  return (
    <div className="content-wrap">
      <Jumbotron className="jumbotron-page-alt">
        <h1>Did you like your fortune, land dweller?</h1>
        <hr />

        <Row>
          <Col xs={12} sm={3} className="sidebar-section">
            <Image src={Meg_Avatar} alt="My Avatar" roundedCircle fluid />
          </Col>

          <Col xs={12} sm={9}>
            <h2>About the site and site maker</h2>
            <p>
              I hope you enjoyed this site! I (the Fortune Giver) and the other
              person (the human) are working to keep it as ADA Accessible as
              possible. This site has a backend made with Django and the Django
              Rest Framework, and the backend serves the React frontend. It is
              hosted on Heroku. This frontend is made with React, React Hooks
              like useForm and useQuery, React-Bootstrap, Redux, React-Redux,
              SCSS, etc. It is also tested and formatted using ESLint,
              Stylelint, Coverage, and Prettier. The site updates through a
              private github repository. There is a demo of that repository on
              Github:
            </p>
            <p>
              <a
                href="https://github.com/neyona/underwaterfortune-2021-version"
                target="_blank"
                rel="noopener noreferrer"
              >
                <u>2020 Underwaterfortune Demo</u>
              </a>
            </p>
            <p>
              The human maker of this site is looking for work, and knows more
              Python beyond Django, and more programming than what this site is
              made with.
            </p>
            <p>
              If you are interested in the hiring the human, contact her using
              the{' '}
              <a href="/contact">
                <u>contact page</u>{' '}
                <FontAwesomeIcon icon={['fas', 'feather-alt']} />
              </a>
              . You can check out some of her other work in her{' '}
              <a
                href="https://github.com/neyona?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <u>github repo</u>
              </a>
              and on a demo site of a project made for a client (posted with
              permission) at{' '}
              <a
                href="https://prek-eval-demo.herokuapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <u>prek-eval-demo.herokuapp.com</u>
              </a>
              .
            </p>
          </Col>
        </Row>

        <hr />

        <Row>
          <Col xs={12} sm={3} className="sidebar-section">
            <a
              href="https://www.monsterdreamsbook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                width={250}
                height={250}
                src={MBD_KM_Top_of_Airplane}
                alt="Book Airplane Picture"
                fluid
              />
            </a>

            <hr />

            <a
              href="https://www.monsterdreamsbook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                width={250}
                height={250}
                src={MDB_KM_Castle}
                alt="A picture of a small castle in the Monster Dreams Book"
                fluid
              />
            </a>
          </Col>

          <Col xs={12} sm={6} className="main-section">
            <h2>Other projects by the site maker</h2>
            <p>
              The human site maker also wrote a children's book and illustrated
              it with a friend who is an excellent art teacher. Check it out
              here at{' '}
              <a
                href="https://www.monsterdreamsbook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <u>monsterdreamsbook.com</u>
              </a>
              . It is available for purchase on{' '}
              <a
                href="https://www.amazon.com/Monster-Dreams-Meghan-Myers/dp/1548187410/ref=sr_1_3?keywords=monster+dreams+meghan+myers&qid=1558826227&s=gateway&sr=8-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <u>Amazon</u>
              </a>
              and on{' '}
              <a
                href="https://www.barnesandnoble.com/w/monster-dreams-meghan-myers/1126678255"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                <u>Barnes & Noble</u>
              </a>
              .
            </p>
            <p>
              The{' '}
              <a
                href="https://www.monsterdreamsbook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <u>Monster Dreams</u>
              </a>{' '}
              illustrations are by Kerri Marshall and the illustrations around
              the text is by Meghan Myers.
            </p>

            <p>
              Contact me using the{' '}
              <a href="/contact">
                <u>
                  <FontAwesomeIcon icon={['fas', 'feather-alt']} /> contact page
                </u>
              </a>{' '}
              if you have comments or questions.
            </p>
          </Col>

          <Col xs={12} sm={3} className="sidebar-section">
            <a
              href="https://www.amazon.com/Monster-Dreams-Meghan-Myers/dp/1548187410/ref=sr_1_3?keywords=monster+dreams+meghan+myers&qid=1558826227&s=gateway&sr=8-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={BookCoverOverGradient}
                alt="Monster Dreams Book Cover in dark blue"
                fluid
              />
            </a>
          </Col>
        </Row>

        <hr />

        <Row>
          <Col>
            <h2>A funny video</h2>
            <p>
              The following is just for fun. It is a cute gerbil video. The link
              will open to a new tab and does play automatically because YouTube
              is like that.
            </p>
            <p>
              <a
                href="https://youtu.be/bU5e1HB_C9I?autoplay=false&rel=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={['fas', 'dragon']} size="lg" /> Cute
                Gerbil Video
              </a>
            </p>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  )
}

export default AboutPage
