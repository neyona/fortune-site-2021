// fortune_docker/frontend/src/components/fortune/FortuneJumbtron.js
import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import OneFortune from '../datacalls/OneFortune';
import { useHistory } from 'react-router-dom';

import FortuneCuttlefishFloat from '../assets/FortuneCuttlefishFloat.png';


function FortuneJumbotron(props) {

    const nameGet = props.nameAuraItems.map(justName => (
        <span key={justName.name}>{justName.name}</span>
    ));


    const history = useHistory();

    const auraGet = String(props.nameAuraItems.map(justAura => justAura.auraColor));

    // The following works better than switch as it also works on Chrome Mobile. regular
    // switch does not work on Chrome Mobile.
    const renderProperJumbotron = (val) => ({
        'auraOne': 'jumbotron-auraOne',
        'auraTwo': 'jumbotron-auraTwo',
        'auraThree': 'jumbotron-auraThree',
        'auraFour': 'jumbotron-auraFour',
        'auraFive': 'jumbotron-auraFive',
        'auraSix': 'jumbotron-auraSix',
        'auraSeven': 'jumbotron-auraSeven',
        'auraEight': 'jumbotron-auraEight',
        'auraNine': 'jumbotron-auraNine',
        'auraTen': 'jumbotron-auraTen',
        'auraEleven': 'jumbotron-auraEleven',
        'auraTwelve': 'jumbotron-auraTwelve',
        'auraThirteen': 'jumbotron-auraThirteen'
    })[val]

    const currentJumbotronValue = renderProperJumbotron(auraGet);

    const reRouteAuraValue = nameGet.length;
    // console.log("Array length: " + reRouteAuraValue);

    // This has to change to zero to reroute. It reroutes to the home page
    // if this page is reloaded.
    if (reRouteAuraValue === 0) {
      history.push('/');
    }

    return (
      <div>
        <Jumbotron className={currentJumbotronValue}>
            {nameGet}<OneFortune />
            <br />
            <Row>
              <Col>
                <Container className="container-cuttlefish" fluid>
                <Image
                  src={FortuneCuttlefishFloat}
                  className="cuttlefish-animation"
                  alt="A yellow Cuttlefish that is animated and is also the one that gives the fortunes."
                  fluid
                />
              </Container>
              </Col>
          </Row>
        </Jumbotron>
      </div>
    );
}

FortuneJumbotron.propTypes = {
  auraGet: PropTypes.string,
  jumbotronClass: PropTypes.string
};

const mapStateToProps = state => ({
  nameAuraItems: state.nameAura.nameAuraItems
});

export default connect(mapStateToProps)(FortuneJumbotron);
