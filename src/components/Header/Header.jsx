import { useState } from 'react'
import { Col, Container, Row, Button, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './header.css'
import Logo from './images/logo.svg'
import Hamburger from './images/hamburger.svg'
import {IoIosSearch} from 'react-icons/io'

const Header = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Taquilla Central</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</Offcanvas.Body>
      </Offcanvas>
      <header id='top'>
        <Container>
          <Row className='align-items-center'>
            <Col xs={4}>
              <div className='menu-trigger' onClick={handleShow}>
                <img src={Hamburger} alt='' />
              </div>
            </Col>
            <Col xs={4}>
              <div className='site-logo text-center'>
                <Link to='/'>
                  <img src={Logo} alt='logo' />
                </Link>
              </div>
            </Col>
            <Col xs={4}>
              <div  className='header-input'>
                <input type="text" />
                <div className='input-content'>
                  <span>|</span>
                  <IoIosSearch></IoIosSearch>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  )
}

export default Header
