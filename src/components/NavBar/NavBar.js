import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


const NavBar = () => {
    return (
        <Navbar bg="dark" variant='dark' expand="lg">
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
            <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
                <Nav>
                    <Nav.Link href="#plantines">Plantines</Nav.Link>
                    <Nav.Link href="#macetas">Macetas</Nav.Link>
                    <Nav.Link href="#insumos">Insumos</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
