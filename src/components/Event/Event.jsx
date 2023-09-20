import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'
import Calendar from './images/calendar.svg'
import Pointer from './images/pointer.svg'
import './event.css'
import thumbnail from './thumb.png'

const Event = ({ column }) => {
  return (
    <>
      <Col xl={column} lg={6} md={6}>
        <div className={`event-item ${column == 3 ? 'small-event' : 'large-event'}`}>
          <div
            className='event-image'
            style={{
              backgroundImage: `url(${thumbnail})`,
            }}
          >
            <span className='event-date'>
              <img src={Calendar} alt='' /> 15-Mar-23
            </span>
          </div>
          <div className='event-content'>
            <h4>Revelado a través del querido caminar abortivo...</h4>
            <p className='location'>
              <img src={Pointer} alt='' /> Avenida Mazatlán 250 Col.
            </p>
            <div className='event-meta'>
              <div className='price'>
                <p>Desde</p>
                <span>€15.00</span>
              </div>
              <Link className='cart-button' to='/ticket-list'>
                <i className='fas fa-shopping-cart'></i> Comprar
              </Link>
            </div>
          </div>
        </div>
      </Col>
    </>
  )
}

export default Event
