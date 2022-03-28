import { createContext, useState } from "react"
import { useNotificationService } from "../services/notification/NotificationService"

const Context = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")))
    const setNotification = useNotificationService()
    
    const addItem = (productToAdd, quantity) => {
        const newObject = {...productToAdd, quantity}

        if (quantity > 0) {
            if(isInCart(productToAdd.id)) {
                const newCart = cart.map(product => {
                    if (product.id === productToAdd.id) {
                        product.quantity = productToAdd.quantity
                    }
                    return product
                })
                setCart(newCart)
                localStorage.setItem("cart", JSON.stringify(newCart))
            } else {
                setCart([...cart, newObject])
                localStorage.setItem("cart", JSON.stringify([...cart, newObject]))
            }
            setNotification(`success`, `Se agregó ${productToAdd.name} al carrito`)
        }
    }

    const isInCart = (id) => {
        return cart.some(product => product.id === id)
    }

    const removeItem = (id, name) => {
        const newCart = cart.filter(product => product.id !== id)
        setCart(newCart)
        localStorage.setItem("cart", JSON.stringify(newCart))
        setNotification("danger", `${name} eliminado del carrito`);
    }

    const removeArray = (array) => {
        const newCart = cart.filter(product => !array.find(item => item.id === product.id))
        setCart(newCart)
        localStorage.setItem("cart", JSON.stringify(newCart))
    }

    const clear = () => {
        setCart([])
        localStorage.setItem("cart", JSON.stringify([]))
    }

    const getProductQuantity = (id) => {
        let initial = 0
        if(isInCart(id)) {
            const product =cart.find(product => product.id === id)
            return initial = product.quantity
        } else{
            return initial
        }
    }

    const getTotalQuantity = () => {
        let count = 0
        cart.forEach(product => {
            count = count + product.quantity
        })
        return count
    }

    const getTotalValue = () => {
        let total = 0
        cart.forEach(product => {
            total = total + (product.quantity * product.price)
        })
        return total
    }


    return (
        <Context.Provider value={{
            cart, 
            addItem, 
            removeItem, 
            removeArray, 
            clear, 
            getProductQuantity, 
            getTotalQuantity, 
            getTotalValue, 
            }}>
                {children}
        </Context.Provider>
    )
}

export default Context