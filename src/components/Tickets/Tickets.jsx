import { Col, Container, Row } from 'react-bootstrap'
import Ticket from '../Ticket/Ticket'
import TicketThumb from './ticket-thumb.png'
import TicketThumbBonus from './ticket-thumb-bonus.png'
import { Link } from 'react-router-dom'
import Artists from '../Artists/Artists'
import './tickets.css'

const Tickets = () => {
  return (
    <section className='ticket-list-section theme-border'>
      <Container>
        <Row>
          <Col xl={8}>
            <div className='ticket-lists'>
              <h4>
                <span>ENTRADAS</span>
              </h4>
              <Ticket thumb={TicketThumb} />
              <Ticket thumb={TicketThumb} />
              <h4>
                <span>BONOS</span>
              </h4>
              <Ticket thumb={TicketThumbBonus} />
              <Ticket thumb={TicketThumbBonus} />
              <Ticket thumb={TicketThumbBonus} />
            </div>
          </Col>
          <Col xl={4}>
            <div className='ticket-order-details theme-border'>
              <div className='coupon-apply'>
                <h4>Tiene un cupón?</h4>
                <form>
                  <input type='text' placeholder='Código promocional' />
                  <input type='submit' value='Aplicar' />
                </form>
              </div>

              <div className='order-summary theme-border'>
                <div className='order-summary-inner'>
                  <h4>Resumen del pedido</h4>
                  <ul>
                    <li>
                      <span>Price</span>
                      <span>€1,725.00</span>
                    </li>
                    <li>
                      <span>Discount 10%</span>
                      <span className='red-text'>-€125.00</span>
                    </li>
                    <li>
                      <span>Total Price</span>
                      <span>€1,600.00</span>
                    </li>
                  </ul>

                  <Link className='solid-btn' to='/customer-details'>
                    <i className='fas fa-shopping-cart'></i> Continuar
                  </Link>
                </div>
              </div>

              <Artists />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Tickets
