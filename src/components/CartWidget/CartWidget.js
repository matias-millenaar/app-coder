import Context from '../../CartContext/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const {cart, getQuantity} = useContext(Context)

    if (cart.length > 0) {
        return (
            <Link className='btn btn-dark' to="/cart">
                <img
                    src={'../images/cart_icon.png'}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Cart logo"
                />
                {getQuantity()}
            </Link>
        )
    }
        return (
            <span></span>
        )
}

export default CartWidget