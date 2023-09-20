import { useEffect, useRef, useState } from 'react'
import { Col, Container, Row, Button, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './header.css'
import Logo from './images/logo.svg'
import Hamburger from './images/hamburger.svg'
import { IoIosSearch } from 'react-icons/io'

const Header = () => {
  const [show, setShow] = useState(false)
  const [openInput, setOpenInput] = useState(false)
  const inputRef = useRef(null);

  const handleInput = () => {
    setOpenInput(true);
  };

  useEffect(() => {
    // Function to close the input when clicking outside
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setOpenInput(false);
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener('click', handleClickOutside);

    // Cleanup: remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
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
              <div className='search' ref={inputRef}>
                <div className='header-input'>
                    <input onClick={handleInput} type="text" />
                  <div className='input-content'>
                    <span>|</span>
                    <IoIosSearch></IoIosSearch>
                  </div>
                </div>
                {
                  openInput &&
                  <div className='search-suggestion'>
                    <p>Conferences</p>
                    <p>Corporate events</p>
                    <p>Festival</p>
                    <p>Expos</p>
                    <p>Sports</p>
                  </div>
                }
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  )
}

export default Header
