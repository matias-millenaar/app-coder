import { useContext } from "react"
import { Button, Card } from "react-bootstrap"
import Context from "../../CartContext/CartContext"
import ItemCount from "../ItemCount/ItemCount"

const CartItem = ({product}) => {
    const {removeItem} = useContext(Context)

    return (
        <Card className="mb-3">
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <div>
                            <img
                            src={product.img}
                            className="img-fluid rounded-3" alt="Shopping item" style={{width: "65px"}} />
                        </div>
                        <div className="ms-3">
                            <h5>{product.name}</h5>
                            <p className="small mb-0">{product.description}</p>
                        </div>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                        <div style={{width: "80px"}}>
                            <p>Precio unitario:</p>
                            <h6 className="mb-0">$ {product.price}</h6>
                        </div>
                        <div style={{width: "50px"}}>
                            <ItemCount 
                                cart = {true}
                                stock = {product.stock}
                                initial = {product.quantity}
                                productId = {product.id}
                            />
                            {/* <h5 className="fw-normal mb-0">{product.quantity}</h5> */}
                        </div>
                        <div style={{width: "80px"}}>
                            <h5 className="mb-0">$ {product.price * product.quantity}</h5>
                        </div>
                        <Button onClick={() => removeItem(product.id, product.name)}>
                            Eliminar
                        </Button>
                    </div>
                </div>
            </Card.Body>
        </Card>                
    )
}

export default CartItem