import {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {

    const[count, setCount] = useState(parseFloat(initial))

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    const increment = () => {
        if (count < stock)
            setCount(count + 1)
    }

    return (
        <>
            <h3>Producto</h3>
            <h3>{count}</h3>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <br/>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </>
    )
}

export default ItemCount