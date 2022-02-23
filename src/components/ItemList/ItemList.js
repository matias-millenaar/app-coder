import Item from "../Item/Item.js";
import { Container, Row } from "react-bootstrap";

const ItemList = ({productsArray = []}) => {
    
    return (
        <Container style={{marginTop: "5vh"}}>
            <Row className="g-4">
                {productsArray.map(product => {
                    return <Item key={product.id} product={product}/>
                })}
            </Row>
        </Container>
    )
}

export default ItemList