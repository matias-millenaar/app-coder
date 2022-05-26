import { Navbar, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { getDocs, collection } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/firebase'
import CartWidget from '../CartWidget/CartWidget'
import Context from '../../Context/CartContext/CartContext'
import { useState, useEffect, useContext } from 'react'

const NavBar = () => {
    const [categories, setCategories] = useState([])
    const {cart} = useContext(Context)

    useEffect(() => {
        getDocs(collection(firestoreDb, 'categories')).then(response => {
            const categories = response.docs.map(cat => {
                return { id: cat.id, ...cat.data()}
            })
            setCategories(categories)
        })
    }, [])

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
                    {categories.map(cat => 
                        <Link 
                            className='btn btn-dark' 
                            style={{marginLeft:"0.5vw"}} 
                            key={cat.id}
                            to={`/category/${cat.id}`}
                        >
                            {cat.description}
                        </Link>)}
                </Nav>
            </Navbar.Collapse>
            <Navbar.Brand>
                {cart.length > 0 && <CartWidget />}
            </Navbar.Brand>
        </Navbar>
    )
}

export default NavBar
