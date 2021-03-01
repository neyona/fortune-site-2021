// fortune_docker/frontend/src/components/contact/ContactForm.js
import React, { Component, useState } from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import regeneratorRuntime from 'regenerator-runtime';
import { useHistory } from 'react-router-dom';


function ContactForm(props) {

  const { handleSubmit, register, errors } = useForm({
      defaultValues: {
          name: "",
          email: "",
          messageinput: ""
      }
    });

    const apiUrl = process.env.API_URL_CFSS;
    const CONTACT_URL = `${apiUrl}`;
    const SECOND_KEY = process.env.SECOND_KEY;

    const history = useHistory();

    const onSubmit = (data, e) => {
      e.preventDefault()
      const conf = {
        method: "POST",
        mode: 'same-origin',
        body: JSON.stringify(data),
        headers: new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-Api-Key': SECOND_KEY,
        })
      };
      fetch(props.endpoint, conf)
      .then(response => response.text())
      .then(response => console.log(response));
      history.push("./confirmation");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridName">
            <Form.Label className="form-label">Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                size="lg"
                ref={register({
                  required: "This is a required field.",
                  pattern: {
                    value: /^[a-zA-Z -.]{2,30}$/,
                    message: "Wait! At least 2 letters, less than 30 letters, and letters, hyphens, periods, and spaces only please."
                  }
                })}
          />
          <p style={{color: "palegreen"}}>{errors.name && errors.name.message}</p>
          <br />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label className="form-label">Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            placholder="Enter email"
            size="lg"
            ref={register({
              required: "This is a required field.",
              pattern: {
                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Email submitted in an email pattern."
              }
            })}
            />
          <p style={{color: "palegreen"}}>{errors.email && errors.email.message}</p>
          <br />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Message</Form.Label>
          <p>You can use up to 10,000 characters.</p>
            <Form.Control
              type="textarea"
              name="messageinput"
              as="textarea"
              rows="5"
              size="lg"
              ref={register({
                    required: "This is a required field, you can use up to 10000 characters."
                })}
              />
            <p style={{color: "palegreen"}}>{errors.messageinput && errors.messageinput.message}</p>
            <br />

        </Form.Group>
      </Form.Row>
      <Form.Row className="justify-content-center">
      <button type="submit" className="grow-button">
          Submit
      </button>
    </Form.Row>
    </Form>
  );
}

export default ContactForm;
