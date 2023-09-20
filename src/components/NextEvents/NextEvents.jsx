import { Col, Container, Row } from 'react-bootstrap'
import './nextevents.css'
import Event from '../Event/Event'

const NextEvents = () => {
  return (
    <section className='eventlist-section next-events'>
      <Container>
        <Row className='section-details'>
          <Col md={8}>
            <div className='section-title'>
              <h2>Próximos Eventos</h2>
            </div>
          </Col>
          <Col md={4}>
            <div className='filter-button'>
              <select className='form-select'>
                <option>Order By</option>
                <option value='Destacados'>Destacados</option>
                <option value='Mas Vendidos'>Mas Vendidos</option>
                <option value='Mas Recientes'>Mas Recientes</option>
                <option value='Mas Antiguos'>Mas Antiguos</option>
                <option value='Alfabeticamente, A-Z'>Alfabeticamente, A-Z</option>
                <option value='Alfabeticamente, Z-A'>Alfabeticamente, Z-A</option>
              </select>
            </div>
          </Col>
        </Row>
        <Row className='g-4'>
          <Event column='3' />
          <Event column='3' />
          <Event column='3' />
          <Event column='3' />
        </Row>
      </Container>
    </section>
  )
}

export default NextEvents
