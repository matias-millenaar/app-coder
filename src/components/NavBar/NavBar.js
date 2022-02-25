import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom"


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
                    <Link className='btn btn-dark' style={{marginLeft:"0.5vw"}} to="/category/plantines">Plantines</Link>
                    <Link className='btn btn-dark' style={{marginLeft:"0.5vw"}} to="/category/macetas">Macetas</Link>
                    <Link className='btn btn-dark' style={{marginLeft:"0.5vw"}} to="/category/insumos">Insumos</Link>
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
