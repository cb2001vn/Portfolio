
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import {Link} from 'react-router-dom';

//icon
import {BiHomeAlt, BiUser} from 'react-icons/bi';
import {AiOutlineFundProjectionScreen} from 'react-icons/ai';
import {HiOutlineDocumentText} from 'react-icons/hi';

function NavBar() {
  return (
        <Navbar 
          expand="sm" 
          fixed='top'
        >

          <Container>
            <Navbar.Brand>Porfolio CB</Navbar.Brand>

            <Navbar.Toggle 
              aria-controls={`offcanvasNavbar`} 
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar`}
              aria-labelledby={`offcanvasNavbarLabel`}
              placement="end"
            >
              <Offcanvas.Header id={'offcanvasNavbarLabel'} closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link 
                    as={Link}  
                  >
                     <BiHomeAlt/> Home
                    </Nav.Link>
                  <Nav.Link
                    as={Link}
                  >
                     <BiUser/> About
                  </Nav.Link>
                  <Nav.Link 
                   as={Link}
                  >
                     <AiOutlineFundProjectionScreen/> Projects
                  </Nav.Link>
                  <Nav.Link
                   as={Link}
                  >
                     <HiOutlineDocumentText/> Resume
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
  );
}

export default NavBar;