import {useState} from 'react'
import { Button, Badge } from 'react-bootstrap'

const ItemCount = ({stock, initial, onAdd}) => {
    const[quantity, setQuantity] = useState(initial)

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    const increment = () => {
        if (quantity < stock)
            setQuantity(quantity + 1)
    }

    return (
        <>
            <Badge pill size="xs" bg="dark"> {quantity} </Badge>
            <br/>
            <Button variant="light" onClick={decrement}>-</Button>
            <Button variant="light" onClick={increment}>+</Button>
            <br/><br/>
            <Button onClick={() => onAdd(quantity)}>Agregar al carrito</Button>
        </>
    )
}

export default ItemCount