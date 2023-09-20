import { Col, Container, Row } from 'react-bootstrap'
import Logo from './logo.png'
import GooglePlay from './googleplay.png'
import AppStore from './appstore.png'
import Payment from './payment.png'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <Container className='footer-arrow'>
        <Row>
          <Col className='text-end'>
            <span className='arrow-top'>
              <a href='#top'>
                <i className='fas fa-angle-up'></i>
              </a>
            </span>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className='justify-content-between'>
          <Col xl={3} lg={6}>
            <div className='footer-box footer-first'>
              <img src={Logo} alt='Logo' />
              <h4>Síganos</h4>
              <ul className='social-media'>
                <li>
                  <a href='' target='_blank'>
                    <i className='fab fa-twitter'></i>
                  </a>
                </li>
                <li>
                  <a href='' target='_blank'>
                    <i className='fab fa-facebook-f'></i>
                  </a>
                </li>
                <li>
                  <a href='' target='_blank'>
                    <i className='fab fa-instagram'></i>
                  </a>
                </li>
                <li>
                  <a href='' target='_blank'>
                    <i className='fab fa-linkedin-in'></i>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xl={3} lg={6}>
            <div className='footer-box footer-menu'>
              <h4>Taquilla Central</h4>
              <ul>
                <li>
                  <a href=''>Contacto</a>
                </li>
                <li>
                  <a href=''>Quiénes somos?</a>
                </li>
                <li>
                  <a href=''>Aviso Legal</a>
                </li>
                <li>
                  <a href=''>Terminos y condiciones</a>
                </li>
                <li>
                  <a href=''>Política de Cookies</a>
                </li>
                <li>
                  <a href=''>Política de Privacidad</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xl={3} lg={6}>
            <div className='footer-box footer-contact'>
              <h4>Datos de contacto.</h4>
              <div className='contact-information'>
                <div className='contact-info'>
                  <h4>Teléfono:</h4>
                  <p>
                    <a href='tel:644 50 75 41'>644 50 75 41</a>
                  </p>
                </div>
                <div className='contact-info'>
                  <h4>Correo:</h4>
                  <p>
                    <a href='mailto:info@taquillacentral.com'>info@taquillacentral.com</a>
                  </p>
                </div>
                <div className='contact-info'>
                  <h4>Oficina:</h4>
                  <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={3} lg={6}>
            <div className='footer-box footer-payment'>
              <h4>Descarga la app</h4>
              <div className='footer-buttons'>
                <a href=''>
                  <img src={GooglePlay} alt='' />
                </a>
                <a href=''>
                  <img src={AppStore} alt='' />
                </a>
              </div>

              <h4>Método de pago</h4>
              <div className='payment-gateways'>
                <img src={Payment} alt='' />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className='copyright'>
        <Container>
          <Row>
            <Col className='text-center'>
              <p>Derechos de autor &copy; Taquilla Central 2023</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
