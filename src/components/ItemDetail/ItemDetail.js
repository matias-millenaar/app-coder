import { Card } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount.js"
import { useState } from "react"
import { Link } from "react-router-dom"


const ItemDetail = ({product}) => {
    const [quantity, setQuantity] = useState(0)

    const handleOnAdd = (quantityToAdd) =>{
        setQuantity(quantityToAdd)
    }

    return (
        <>
            <br/>
            <Card className="text-center">
                <Card.Header>{product.category}</Card.Header>
                <Card.Img variant="top" src={product.img2} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        {product.description}
                        <br/>
                        $ {product.price}
                    </Card.Text>
                    <Card.Text>
                        {quantity > 0 ? 
                        <>
                            <strong>{quantity} {quantity === 1 ? "producto agregado" : "productos agregados"} con éxito</strong>
                            <br/><br/>
                            <Link to={"/cart"} className={"btn btn-success"}> Finalizar compra </Link> 
                        </>:
                        <ItemCount initial={1} stock={product.stock} onAdd={handleOnAdd}/>}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default ItemDetail