import { useContext, useRef, useState } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import Context from "../../CartContext/CartContext"
import CartItem from "../CartItem/CartItem"
import Togglable from "../Togglable/Togglable"
import ContactForm from "../ContactForm/ContactForm"
import { Timestamp } from "firebase/firestore"
import { pushOrder } from "../../services/firebase/firebase"
import { useNotificationService } from "../../services/notification/NotificationService"

const Cart = () => {
    const {cart, getTotalValue, clear, removeArray} = useContext(Context)
    const [processingOrder, setProcessingOrder] = useState(false)
    const [orderId, setOrderId] = useState("")
    const setNotification = useNotificationService()
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        comments: ''
    })

    const contactFormRef = useRef()

    const confirmOrder = () => {

        if(contact.name !== '' && contact.email !== '' && contact.phone !== '' && contact.address !== '' && contact.comments !== '') {
            setProcessingOrder(true)

            const objOrder = {
                buyer: contact,
                items: cart,
                total: getTotalValue(),
                date: Timestamp.fromDate(new Date())
            }

            const onSuccess = (id) =>{
                clear()
                setNotification(`success`, `Su orden ha sido generada con éxito`)
                setOrderId(id)
                setContact({name: '', email: '', phone: '', address: '', comments: ''})
                setProcessingOrder(false)
            }

            const onError = (array) => {
                const names = []
                array.forEach(product => {
                    names.push(product.name)
                })
                setNotification(`danger`, `Desafortunadamente ya no contamos con stock de ${names}`)
                removeArray(array)
                setProcessingOrder(false)
            }

            pushOrder(objOrder, onSuccess, onError)
        } else {
            setNotification('danger', 'Debe completar los datos de contacto para generar la orden')
        }
    }

    const Cards = () => {
        return (
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
                    <h3>Total: $ {getTotalValue()}</h3>
                </Card.Footer>
            </Card>
        )
    }

    const Empty = () => {
        return (
            <h6>No cuenta con items en su carrito. Vuelva al HOME para ver nuestros productos</h6>
        )
    }

    const OrderInfo = () => {
        return (
            <h2> Gracias por comprar con nosotros, su número de orden es: {orderId}</h2>
        )
    }


    if(processingOrder) {
        return <h2>Su orden está siendo procesada, por favor aguarde...</h2>
    }

    return (
        <section className="h-100 h-custom" style={{backgroundColor: "#eee"}}>
            <Container className="py-5 h-100">
                <Row className="d-flex justify-content-center align-items-center h-100">
                    <Col>
                        {
                            (cart.length > 0) ? <Cards/> :
                            (orderId === "") ? <Empty/> : 
                            <OrderInfo/>
                        }
                    </Col>
                </Row>
            </Container>
            {
                (cart.length > 0) ? 
                <>
                    <Button className="btn btn-success mb-4" onClick={confirmOrder}>Terminar orden</Button>
                    <Togglable buttonLabelShow={
                                ( contact.name !== '' && contact.email !== '' && contact.phone !== '' && contact.address !== '' && contact.comments !== '') 
                                    ? 'Editar contacto' 
                                    : cart.length > 0 && 'Agregar contacto'
                                } 
                                ref={contactFormRef}>
                        <ContactForm toggleVisibility={contactFormRef} setContact={setContact} />
                    </Togglable> 
                </> :                
                <Link className='btn btn-warning mb-4' to="/">HOME</Link>
            }
            {
                (contact.name !== '' && contact.email !== '' && contact.phone !== '' && contact.address !== '' && contact.comments !== '') &&
                
                    <div>
                        <h4>Nombre: {contact.name}</h4>
                        <h4>Email: {contact.email}</h4>
                        <h4>Teléfono: {contact.phone}</h4>
                        <h4>Dirección: {contact.address}</h4>
                        <h4>Comentarios: {contact.comments}</h4>
                        <Button onClick={() => setContact({name: '', email: '', phone: '', address: '', comments: ''})} className='btn btn-danger'>
                            Borrar datos de contacto
                        </Button>
                    </div>    
            }  
        </section>
    )

}

export default Cart