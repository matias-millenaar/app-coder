import { Card } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount.js"
import Context from '../../CartContext/CartContext'
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { useNotificationService } from "../../services/notification/NotificationService.js"


const ItemDetail = ({id, name, category, price, stock, img, img2, description}) => {
    const [quantity, setQuantity] = useState(0)
    const setNotification = useNotificationService()

    const {addItem, getProductQuantity} = useContext(Context)

    const handleOnAdd = (quantity) => {
        setQuantity(quantity)
        const productToAdd = {id, name, quantity, category, price, stock, img, img2, description}

        if (productToAdd.stock === 0) {
            setNotification("danger", "Lo sentimos, el producto que quiere agregar no tiene stock disponible")
        } else {
            addItem(productToAdd, quantity)
        }
    }

    return (
        <>
            <br/>
            <Card className="text-center">
                <Card.Header>{category}</Card.Header>
                <Card.Img variant="top" src={img2} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                        <br/>
                        $ {price}
                    </Card.Text>
                    <Card.Text>
                        {quantity > 0 ? 
                        <>
                            <strong>{quantity} {quantity === 1 ? "producto agregado" : "productos agregados"} con éxito</strong>
                            <br/><br/>
                            <Link to={"/cart"} className={"btn btn-success"}> Finalizar compra </Link> 
                        </>:
                        <ItemCount 
                            initial={getProductQuantity(id)} 
                            product={id}
                            stock={stock} 
                            onAdd={handleOnAdd}/>}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default ItemDetail