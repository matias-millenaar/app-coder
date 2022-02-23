import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


const NavBar = () => {

    return (
        <Navbar bg="dark" variant='dark' expand="lg">
            <Navbar.Brand href="/">
                <img
                    alt="Argenplugs logo"
                    src={'../images/logo_argenplugs.png'}
                    width="37.3"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                ARGENPLUGS
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='me-auto' activeKey={window.location.pathname}>
                    <Nav.Link href="/category/plantines">Plantines</Nav.Link>
                    <Nav.Link href="/category/macetas">Macetas</Nav.Link>
                    <Nav.Link href="/category/insumos">Insumos</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Brand href="#">
                <img
                    src={'../images/cart_icon.png'}
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
