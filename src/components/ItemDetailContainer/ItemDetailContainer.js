import { useState, useEffect } from "react";
import { getProduct } from "../../asyncMock.js";
import ItemDetail from "../ItemDetail/ItemDetail.js";
import { useParams } from "react-router-dom";

const  ItemDetailContainer = () => {
    const[product, setProducts] = useState([])
    const {productId} = useParams()
    
    useEffect(() => {
        getProduct(productId).then(product => {
            setProducts(product)
        }).catch( err => {
            console.log(err);
        })
    }, [productId])

    return (
        <ItemDetail product={product}/>
    )
}

export default ItemDetailContainer