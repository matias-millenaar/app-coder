import { createContext, useState } from "react"
import { useNotificationService } from "../services/notification/NotificationService"

const Context = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const setNotification = useNotificationService()
    
    const addItem = (productToAdd, quantity) => {
        const newObject = {...productToAdd, quantity}

        if (quantity > 0) {
            if(isInCart(productToAdd.id)) {
                const modifiedCart = cart.map(product => {
                    if (product.id === productToAdd.id) {
                        product.quantity = productToAdd.quantity
                    }
                    return product
                })
                setCart(modifiedCart)
            } else {
                setCart([...cart, newObject])
            }
            setNotification(`success`, `Se agregó ${productToAdd.name} al carrito`)
        }
    }

    const isInCart = (id) => {
        return cart.some(p => p.id === id)
    }

    const removeItem = (id, name) => {
        setCart(cart.filter(p => p.id !== id))
        setNotification("danger", `${name} eliminado del carrito`);
    }

    const removeArray = (array) => {
        const newCart = cart.filter(item => !array.find(p => p.id === item.id))
        setCart(newCart);
    }

    const clear = () => {
        setCart([])
    }

    const getProductQuantity = (id) => {
        let initial = 0
        if(isInCart(id)) {
            const product =cart.find(p => p.id === id)
            return initial = product.quantity
        } else{
            return initial
        }
    }

    const getTotalQuantity = () => {
        return cart.reduce((acc, product) => acc + product.quantity, 0)
    }

    const getTotalValue = () => {
        return cart.reduce((acc, product) => acc + (product.quantity * product.price), 0)
    }

    return (
        <Context.Provider value={{cart, addItem, removeItem, removeArray, clear, getProductQuantity, getTotalQuantity, getTotalValue}}>
            {children}
        </Context.Provider>
    )
}

export default Context