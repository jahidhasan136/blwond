import { Container, Row, Col } from 'react-bootstrap'
import ProductDetailsThumb from './event-details.png'
import Calendar from './calendar.svg'
import Map from './map.svg'
import './eventdetails.css'

const EventDetails = () => {
  return (
    <section className='event-details-section'>
      <Container>
        <Row className='align-items-center'>
          <Col xl={6}>
            <div className='event-details'>
              <img src={ProductDetailsThumb} alt='' className='event-details-thumb img-fluid' />
              <div className='event-details-info'>
                <p>
                  <img src={Calendar} alt='' /> From 15 March to June 29, 2023 Tuesday 10;30 PM
                </p>
                <p>
                  <img src={Map} alt='' /> Avenida Mazatlán 250 Col, Manchester, Kentucky 39495
                </p>
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className='event-details-content'>
              <h2>Revelado a través del querido caminar abortivo</h2>
              <p>
                Su entrada al evento es su entrada a una experiencia inolvidable. Desde el momento en que ingrese al lugar, estará rodeado de las vistas, los sonidos y los olores que hacen que su
                evento sea único.
              </p>
              <p>
                Tendrá acceso a todas las comodidades y actividades que el evento tiene para ofrecer, lo que le dará la oportunidad de crear recuerdos que durarán toda la vida. A medida que avanza por
                el lugar, tómese el tiempo para{' '}
              </p>
              <p>
                apreciar todo el arduo trabajo que se ha realizado para que su evento sea un éxito. ¡Tu entrada es tu pase a una noche que nunca olvidarás! Su entrada al evento es su entrada a una
                experiencia inolvidable.{' '}
              </p>
              <p>
                Desde el momento en que ingrese al lugar, estará rodeado de las vistas, los sonidos y los olores que hacen que su evento sea único. Desde el momento en que ingrese al lugar, estará
                rodeado de las vistas, los sonidos y los{' '}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default EventDetails
