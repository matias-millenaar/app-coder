import { useState } from 'react'
import { Button, Badge } from 'react-bootstrap'


const ItemCount = ({initial, stock, onAdd}) => {
    const[quantity, setQuantity] = useState(initial)

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const add = () =>  {
        onAdd(quantity)
    }

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

export default ItemCount