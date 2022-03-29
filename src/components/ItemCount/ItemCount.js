import { useContext, useState } from 'react'
import { Button, Badge } from 'react-bootstrap'
import Context from '../../CartContext/CartContext'


const ItemCount = ({cart = false, initial, stock, onAdd, productId}) => {
    const[quantity, setQuantity] = useState(initial)
    const {incrementQuantity, decrementQuantity} = useContext(Context)

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
            if (cart) {
                decrementQuantity(productId)
            }
        }
    }
    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
            if (cart) {
                incrementQuantity(productId)
            }
        }
    }

    const add = () =>  {
        onAdd(quantity)
    }

    const Counter = () => {
        if (cart) {
            return (
                <>
                    <Button variant="light" onClick={increment}>+</Button>
                    <Badge pill size="xs" bg="dark"> {quantity} </Badge>
                    <Button variant="light" onClick={decrement}>-</Button>
                </>
            )
        } else {
            return (
                <>
                    <Badge pill size="xs" bg="dark"> {quantity} </Badge>
                    <br/>
                    <Button variant="light" onClick={decrement}>-</Button>
                    <Button variant="light" onClick={increment}>+</Button>
                    <br/><br/>
                    <Button onClick={add}>Agregar al carrito</Button>
                </>
            )
        }
    }

    return (
        <Counter />
    )
}

export default ItemCount