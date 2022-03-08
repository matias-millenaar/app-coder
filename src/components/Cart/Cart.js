import { useContext } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import Context from "../../CartContext/CartContext"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
    const {cart, getTotal, clear} = useContext(Context)

    if (cart.length > 0) {
        return (
            <section className="h-100 h-custom" style={{backgroundColor: "#eee"}}>
                <Container className="py-5 h-100">
                    <Row className="d-flex justify-content-center align-items-center h-100">
                        <Col>
                            <Card>
                                <Card.Body className="p-4">
                                    <Row>
                                        <Col className="lg-7">
                                            {cart.map(product => {
                                                return <CartItem key={product.id} product={product} />
                                            })}
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Footer className="d-flex justify-content-between">
                                    <Button onClick={clear}>Eliminar todo</Button>
                                    <h3>Total: $ {getTotal()}</h3>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
    return (
        <section className="h-100 h-custom" style={{backgroundColor: "#eee"}}>
            <Container className="py-5 h-100">
                <Row className="d-flex justify-content-center align-items-center h-100">
                    <Col>
                        <h6>No cuenta con items en su carrito. Vuelva al
                            <Link className='btn btn-outline-secondary btn-sm' to="/">home</Link>
                            para ver nuestros productos
                        </h6>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}

export default Cart