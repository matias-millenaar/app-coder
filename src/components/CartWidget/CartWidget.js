import Context from '../../Context/CartContext/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const {getTotalQuantity} = useContext(Context)

    return (
        <Link className='btn btn-dark' to="/cart">
            <img
                src={'../images/cart_icon.png'}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Cart logo"
            />
            {getTotalQuantity()}
        </Link>
    )
}

export default CartWidget