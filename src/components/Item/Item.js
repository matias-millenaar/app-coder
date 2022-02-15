import { Card, Col } from 'react-bootstrap'

const Item = ({title, category, price, img}) => {

    return (
        <Col>
            <Card border="secondary" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
                    <Card.Text>
                        $ {price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Item