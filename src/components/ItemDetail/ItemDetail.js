import { Card, Button } from "react-bootstrap"

const ItemDetail = ({product}) => {

    return (
        <>
            <br/>
            <Card className="text-center">
                <Card.Header>{product.category}</Card.Header>
                <Card.Img variant="top" src={product.img2} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        <p>{product.description}</p>
                        <p>$ {product.price}</p>
                    </Card.Text>
                    <Button variant="primary">Agregar al carrito</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default ItemDetail