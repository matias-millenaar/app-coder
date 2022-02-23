import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ({product}) => {

    return (
        <Col className="d-flex justify-content-center">
                <Card border="secondary" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.img} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{product.category}</Card.Subtitle>
                    </Card.Body>
                    <Card.Footer>
                        <Link to={`/item/${product.id}`} className='btn btn-secondary'>Ver detalles</Link>
                    </Card.Footer>
                </Card>
        </Col>
    )
}

export default Item