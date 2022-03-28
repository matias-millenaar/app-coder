import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.js";
import { useParams } from "react-router-dom";
// import { getProductById } from "../../services/firebase/firebase.js";
import { getProduct } from "../../asyncMock.js";

const  ItemDetailContainer = () => {
    const[product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const {productId} = useParams()
    
    useEffect(() => {
        setLoading(true)

        // getProductById(productId).then(response => {
        getProduct(productId).then(response => {
            setProduct(response)
        }).catch( err => {
            console.error(err)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    return (
        <>
            {
                loading ?
                    <h2>Cargando, por favor espere...</h2> :
                product ?
                    <ItemDetail {...product}/> :
                    <h2>El producto no existe</h2>
            }
        </>
    )
}

export default ItemDetailContainer