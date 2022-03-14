import { useContext } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import Context from "../../CartContext/CartContext"
import CartItem from "../CartItem/CartItem"
import { writeBatch , Timestamp, getDoc, doc, addDoc, collection } from "firebase/firestore"
import { firestoreDb } from "../../services/firebase/firebase"

const Cart = () => {
    const {cart, getTotal, clear, removeItem} = useContext(Context)

    const confirmOrder = () => {

        const objOrder = {
            buyer: {
                name: "matias",
                phone: "123456789",
                address: "abc123",
                emai: "abc@gmail.com"
            },
            items: cart,
            total: getTotal(),
            date: Timestamp.fromDate(new Date())
        }

        const batch = writeBatch(firestoreDb)
        const outOfStock = []

        objOrder.items.forEach(prod => {
            getDoc(doc(firestoreDb, 'products', prod.id)).then(response => {
                if(response.data().stock >= prod.quantity) {
                    batch.update(doc(firestoreDb, 'products', response.id), {
                        stock: response.data().stock - prod.quantity
                    })
                } else {
                    outOfStock.push({ id: response.id, ...response.data()})    
                }
            })
            .then(() => {
                if(outOfStock.length === 0) {
                    addDoc(collection(firestoreDb, 'orders'), objOrder).then(({id}) => {
                        batch.commit().then(() => {
                            clear()
                            console.log(`Su orden número ${id} ha sido generada con éxito`);
                        })
                    }).catch(error => {
                        console.error(error)
                    })
                } else {
                    outOfStock.forEach(prod => {
                        // console.log(outOfStock);
                        // console.log(prod);
                        console.error(`El producto ${prod.name} no tiene stock disponible`)
                        removeItem(prod.id)
                    })
                }
            })
        })
    }

    if (cart.length > 0) {
        return (
            <section className="h-100 h-custom" style={{backgroundColor: "#eee", paddingBottom: "5vh"}}>
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
                <Button className="btn btn-success" onClick={confirmOrder}>Terminar orden</Button>
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