// frontend/src/components/pages/ErrorPage.js
import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Figure from 'react-bootstrap/Figure'

import FirstPageCuttleFishEye from '../assets/FirstPageCuttlefishEye.jpg'

// This error page comes up at any page that is not the frontend. Backend
// pages must be typed in correctly to not get this page.
export default class ErrorPage extends Component {
  render() {
    return (
      <div className="content-wrap">
        <Jumbotron className="jumbotron-page">
          <h2>HOW DID YOU GET HERE!</h2>
          <h3>404 ERROR</h3>
          <Figure>
            <Figure.Image
              width={300}
              height={400}
              alt="A Cuttlefish eye close up from the side"
              src={FirstPageCuttleFishEye}
              className="img"
            />
            <Figure.Caption className="figure-caption-custom">
              It's me, I see you!
            </Figure.Caption>
          </Figure>
          <h2>
            This is not the page you are looking for. There is no fortune here.
          </h2>
          <p>
            You can use the navigation menu up top to get back to non-404 error
            pages.
          </p>
        </Jumbotron>
      </div>
    )
  }
}
