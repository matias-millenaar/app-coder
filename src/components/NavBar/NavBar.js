import './NavBar.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const NavBar = () => {
    return (
        <Navbar bg="dark" variant='dark' expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt="logo"
                        src={'./images/logo_argenplugs.png'}
                        width="37.3"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    ARGENPLUGS
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Plantines</Nav.Link>
                            <Nav.Link href="#link">Macetas</Nav.Link>
                            <Nav.Link href="#link">Insumos</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar

/*
<Navbar.Brand href="#home">
<img
    alt="logo"
    src={'./images/logo_argenplugs.png'}
    width="37.3"
    height="30"
    className="d-inline-block align-top"
/>{' '}
ARGENPLUGS
</Navbar.Brand>
*/