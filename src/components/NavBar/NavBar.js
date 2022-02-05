import './NavBar.css'
import Navbar from 'react-bootstrap/Navbar'
import logo from './public/images/logo_argenplugs.png'

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img
                    alt="logo"
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
            React Bootstrap
            </Navbar.Brand>
        </Navbar>
    )
}

export default NavBar