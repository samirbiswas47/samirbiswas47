import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap';
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap'
import { logout } from '../actions/userActions'

export default function Header() {
  
  const dispatch = useDispatch()
  const userLogin = useSelector( (state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }
    return (
        <>
        <header>
          <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
              <LinkContainer to='/'>
                  <Navbar.Brand>
                    {/* <img
                        className="img-fluid"
                        src="https://hatdoor.com/images/logo.png"
                      alt="First slide"/> */}
                    ProShop
                  </Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav className="ml-auto" >
                    <LinkContainer to='/cart'>
                          <Nav.Link><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
                    </LinkContainer>
                    { userInfo ? (
                      <NavDropdown title={userInfo.name} id="username">
                        <LinkContainer to='/profile'>
                          <NavDropdown.Item>Profile</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                      </NavDropdown>
                      ) :
                      <LinkContainer to='/login'>
                            <Nav.Link><i className="fas fa-user"></i> Sign In</Nav.Link>
                      </LinkContainer>
                    }
                  </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
      </>
    )
}
