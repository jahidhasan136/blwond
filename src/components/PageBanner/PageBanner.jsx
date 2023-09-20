import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PageBannerBg from './bg.png'
import './pagebanner.css'

const PageBanner = () => {
  return (
    <section className='page-banner-section' style={{ backgroundImage: `url(${PageBannerBg})` }}>
      <Container>
        <Row className='align-items-center'>
          <Col lg={8}>
            <div className='breadcrumb-text'>
              <p>From 15 March to June 29-2023</p>
              <h1>Revelado a través del querido caminar abortivo</h1>
            </div>
          </Col>
          <Col lg={4} className='text-end'>
            <div className='page-banner-button'>
              <Link to='/'>
                <i className='fas fa-angle-left'></i> De vuelta a las compras
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default PageBanner
