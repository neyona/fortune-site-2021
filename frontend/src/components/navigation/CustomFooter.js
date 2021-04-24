// frontend/src/components/navigation/CustomFooter.js
import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CustomFooter = () => (
  <Nav sticky="bottom" className="justify-content-center footer-custom">
    <a href="/webaccess" rel="noopener noreferrer">
      <FontAwesomeIcon icon={['fas', 'universal-access']} size="lg" /> Web
      Access Policy
    </a>
    <a
      href="https://www.pinterest.com/mjcmyers/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={['fab', 'pinterest']} size="lg" /> Pinterest Page
    </a>
    <a
      href="https://github.com/neyona?tab=repositories"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={['fab', 'github']} size="lg" /> Github Repositories
    </a>
    <a
      href="https://www.pbs.org/wgbh/nova/camo/anat-nf.html"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={['fas', 'dragon']} size="lg" /> Cuttlefish
      Information from Nova
    </a>
  </Nav>
)

export default CustomFooter
