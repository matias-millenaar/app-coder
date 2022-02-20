import { useState, useEffect } from "react";
import { getProduct } from "../../asyncMock.js";
import ItemDetail from "../ItemDetail/ItemDetail.js";

const  ItemDetailContainer = () => {

    const[product, setProducts] = useState([])
    
    useEffect(() => {
        getProduct().then(product => {
            setProducts(product)
        })
    }, [])

    return (
        <ItemDetail product={product}/>
    )
}

export default ItemDetailContainer