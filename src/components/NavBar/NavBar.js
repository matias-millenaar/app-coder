import { Navbar, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom"
import CartWidget from '../CartWidget/CartWidget'
import Context from '../../CartContext/CartContext'
import { useContext } from 'react'

const NavBar = () => {
    const {cart} = useContext(Context)

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
            <Navbar.Brand>
                {cart.length > 0 && <CartWidget />}
            </Navbar.Brand>
        </Navbar>
    )
}

export default NavBar
