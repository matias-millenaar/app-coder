import { createContext, useState } from "react"

const Context = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    
    const addItem = (productToAdd, quantity) => {
        const newObject = {...productToAdd, quantity}

        if(isInCart(productToAdd.id)) {
            const modifiedCart = cart.map(product => {
                if (product.id === productToAdd.id) {
                    product.quantity += productToAdd.quantity
                }
                return product
            })
            setCart(modifiedCart)
        } else {
            setCart([...cart, newObject])
        }
    }

    const isInCart = (id) => {
        return cart.some(p => p.id === id)
    }

    const removeItem = (id) => {
        cart.filter(p => p.id !== id)
    }

    const clear = () => {
        setCart([])
    }

    return (
        <Context.Provider value={{cart, addItem, removeItem, clear}}>
            {children}
        </Context.Provider>
    )
}

export default Context