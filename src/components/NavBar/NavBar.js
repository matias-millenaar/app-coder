import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


const NavBar = () => {
    return (
        <Navbar bg="dark" variant='dark' expand="lg">
            <Navbar.Brand href="#home">
                <img
                    alt="Argenplugs logo"
                    src={'./images/logo_argenplugs.png'}
                    width="37.3"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                ARGENPLUGS
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='me-auto'>
                    <Nav.Link href="#plantines">Plantines</Nav.Link>
                    <Nav.Link href="#macetas">Macetas</Nav.Link>
                    <Nav.Link href="#insumos">Insumos</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Brand href="#">
                <img
                    src={'./images/cart_icon.png'}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Cart logo"
                />
                contador
            </Navbar.Brand>
        </Navbar>
    )
}

export default NavBar
