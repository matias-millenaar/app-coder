import { Card, Col, Container } from 'react-bootstrap'

const Item = ({product}) => {

    return (
        <Col>
            <Container>
                <Card border="secondary" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.img} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{product.category}</Card.Subtitle>
                        <Card.Text>
                            $ {product.price}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </Col>
    )
}

export default Item