// frontend/src/components/fortune/FortuneForm.js
import React, { Component, useState } from 'react'
import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { connect } from 'react-redux'
import { getNameAura } from '../redux/nameaura/nameAuraAction'

const FortuneForm = (props) => {
  // useForm is a lightweight form hook from a small light library
  const { handleSubmit, register, errors } = useForm({
    defaultValues: {
      name: '',
      auraColor: 'auraOne',
    },
  })

  const history = useHistory()

  const onSubmit = (values, e) => {
    e.preventDefault()
    JSON.stringify(values)
    props.getNameAura(values)
    // moves site to next page onSubmit
    history.push('/fortune')
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="show grid text-center">
          <Col className="element-wrapper">
            <label className="legend" htmlFor="name">
              A Name, a Totally Real Name
            </label>
            <br />
            <Form.Control
              type="text"
              name="name"
              size="lg"
              aria-label="Input a name with at least 2 letters, less than 30 letters, and only letters, periods, and spaces are allowed"
              ref={register({
                required:
                  'This is a required field (but you can input a fake name)',
                pattern: {
                  value: /^[a-zA-Z -.]{2,30}$/,
                  message:
                    'Wait! At least 2 letters, less than 30 letters, and letters, hyphens, periods, and spaces only please.',
                },
              })}
            />

            <br />
            <p style={{ color: 'palegreen' }}>
              {errors.name && errors.name.message}
            </p>
            <br />
          </Col>

          <Col sm={4}>
            <Container>
              <label className="legend" htmlFor="auraColor">
                Current Aura Color
              </label>
              <fieldset>
                <Row className="show grid text-center">
                  <Col>
                    <label className="auraOne">
                      <input
                        name="auraColor"
                        type="radio"
                        value="auraOne"
                        ref={register({ required: true })}
                      />
                      ABCD
                    </label>

                    <label className="auraTwo">
                      <input
                        name="auraColor"
                        type="radio"
                        value="auraTwo"
                        ref={register({ required: true })}
                      />
                      ABCD
                    </label>

                    <label className="auraThree">
                      <input
                        name="auraColor"
                        type="radio"
                        value="auraThree"
                        ref={register({ required: true })}
                      />
                      ABCD
                    </label>

                    <label className="auraFour">
                      <input
                        name="auraColor"
                        type="radio"
                        value="auraFour"
                        ref={register({ required: true })}
                      />
                      ABCD
                    </label>

                    <label className="auraFive">
                      <input
                        name="auraColor"
                        type="radio"
                        value="auraFive"
                        ref={register({ required: true })}
                      />
                      ABCD
                    </label>
                  </Col>

                  <Col>
                    <label className="auraSix">
                      <input
                        name="auraColor"
                        type="radio"
                        value="auraSix"
                        ref={register({ required: true })}
                      />{' '}
                      What Aura?
                    </label>

                    <label className="auraTwelve">
                      <input
                        name="auraColor"
                        type="radio"
                        value="auraTwelve"
                        ref={register({ required: true })}
                      />
                      ABCD
                    </label>

                    <label className="auraThirteen">
                      <input
                        name="auraColor"
                        type="radio"
                        value="auraThirteen"
                        ref={register({ required: true })}
                      />
                      ABCD
                    </label>
                  </Col>

                  <Col>
                    <label className="auraSeven">
                      <input
                        name="auraColor"
                        type="radio"
                        value="auraSeven"
                        ref={register({ required: true })}
                      />
                      ABCD
                    </label>

                    <label className="auraEight">
                      <input
                        name="auraColor"
                        type="radio"
                        value="auraEight"
                        ref={register({ required: true })}
                      />
                      ABCD
                    </label>

                    <label className="auraNine">
                      <input
                        name="auraColor"
                        type="radio"
                        value="auraNine"
                        ref={register({ required: true })}
                      />
                      ABCD
                    </label>

                    <label className="auraTen">
                      <input
                        name="auraColor"
                        type="radio"
                        value="auraTen"
                        ref={register({ required: true })}
                      />
                      ABCD
                    </label>

                    <label className="auraEleven">
                      <input
                        name="auraColor"
                        type="radio"
                        value="auraEleven"
                        ref={register({ required: true })}
                      />
                      ABCD
                    </label>
                  </Col>
                </Row>
              </fieldset>
            </Container>
          </Col>

          <Col>
            <br />
            <br />
            <Container className="container-cuttlefish">
              <button
                name="The submit button"
                className="btn-og-circle"
                type="submit"
              >
                Fortune Now!
              </button>
            </Container>
          </Col>
        </Row>
      </Form>
    </>
  )
}

FortuneForm.propTypes = {
  getNameAura: PropTypes.func.isRequired,
}

export default connect(null, { getNameAura })(FortuneForm)
