// fortune_docker/frontend/src/components/CustomNavbar.js
import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import navicon from '../assets/navicon.png';

const CustomNavbar = () => (
    <Navbar sticky="top" expand="lg">
      <Navbar.Brand href="/">
        <img
          alt=""
          src={navicon}
          width="35"
          height="35"
          className="d-inline-block align-bottom"
          />
        {'    Underwater Fortunes'}
      </Navbar.Brand>
      <Navbar.Toggle>
        <span>
          <FontAwesomeIcon
            icon="bars" color="#80ccff" size="lg"
          />
        </span>
      </Navbar.Toggle>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/webaccess">Accessibility</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/merch">Merch</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default CustomNavbar;
