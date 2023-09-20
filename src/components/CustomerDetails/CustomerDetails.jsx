import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Artists from '../Artists/Artists'
import './customer-details.css'
import { Link } from 'react-router-dom'

const CustomerDetails = () => {
  const [checked, setIsChecked] = useState(false)

  const handleCheckSms = (e) => {
    setIsChecked(e.target.checked)
  }

  return (
    <section className='customer-details-section'>
      <Container>
        <Row>
          <Col xl={8}>
            <div className='customer-details-form-wrapper'>
              <div className='customer-info'>
                <h3>DATOS DEL COMPRADOR</h3>
                <p className='remaining-time'>Tiempo restante para finalizar la compra: 12:05</p>
              </div>
              <div className='customer-details-form'>
                <form>
                  <Row>
                    <Col xl={12}>
                      <div className='form-group'>
                        <input type='text' placeholder='Nombre*' />
                      </div>
                    </Col>
                    <Col xl={6}>
                      <div className='form-group'>
                        <input type='email' placeholder='Correo*' />
                      </div>
                    </Col>
                    <Col xl={6}>
                      <div className='form-group'>
                        <input type='email' placeholder='Confirmar correo*' />
                      </div>
                    </Col>
                    <Col xl={6}>
                      <div className='form-group'>
                        <input type='text' placeholder='DNI / Pasaporte / ID*' />
                      </div>
                    </Col>
                    <Col xl={6}>
                      <div className='form-group'>
                        <input type='text' placeholder='Fecha de Nacimiento*' />
                      </div>
                    </Col>
                    <Col xl={12}>
                      <div className='form-group'>
                        <input type='tel' placeholder='Teléfono*' />
                      </div>
                    </Col>
                    <Col xl={6}>
                      <div className='form-group'>
                        <input type='text' placeholder='Código Postal*' />
                      </div>
                    </Col>
                    <Col xl={6}>
                      <div className='form-group gender-choose'>
                        <div className=' d-flex align-items-center'>
                          <h5>Selección genero</h5>
                          <span>
                            <input type='radio' name='gender' />
                            Male
                          </span>
                          <span>
                            <input type='radio' name='gender' />
                            Female
                          </span>
                        </div>
                      </div>
                    </Col>
                    <Col xl={12}>
                      <div className='form-group gender-choose'>
                        <div className='checkboxes'>
                          <p>
                            <input onChange={handleCheckSms} checked={checked} type='checkbox' className='me-2' /> Send by SMS (+0.10€)
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </form>
              </div>
              <div className='order-summary-customer'>
                <h4>Resumen del pedido</h4>
                <ul>
                  <li>
                    <span>Price</span>
                    <span>€1,725.00</span>
                  </li>
                  <li>
                    <span>Send by SMS</span>
                    <span>€{checked ? 0.1 : 0}</span>
                  </li>
                  <li>
                    <span>Discount 10%</span>
                    <span className='red-text'>-€125.00</span>
                  </li>
                  <li>
                    <span>Total Price</span>
                    <span>€{checked ? 1600.0 + 0.1 : 1600.0}</span>
                  </li>
                </ul>
              </div>
              <div className='terms-conditions'>
                <div className='checkboxes'>
                  <p>
                    <input type='checkbox' /> I agree to have my personal information collected and processed for future marketing, promotional and publicity purposes, according to the terms
                    established in the Additional Information on Data Protection.
                  </p>
                  <p>
                    <input type='checkbox' /> By clicking Continue, you agree to our terms and conditions and the information on Data Protection.
                  </p>
                </div>
                <div className='confirm-buttons'>
                  <button className='cancel-button'>Cancelar pedido</button>
                  <Link className='solid-btn' to='/customer-details'>
                    <i className='fas fa-shopping-cart'></i> Continuar
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={4}>
            <Artists />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CustomerDetails
