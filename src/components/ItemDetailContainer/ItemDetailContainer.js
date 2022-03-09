import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.js";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { firestoreDb } from "../../services/firebase/firebase.js";

const  ItemDetailContainer = () => {
    const[product, setProducts] = useState([])
    const {productId} = useParams()
    
    useEffect(() => {
        const docRef = doc(firestoreDb, "products", productId)

        getDoc(docRef).then(response => {
            const product = { id: response.id, ...response.data()}
            setProducts(product)
        }).catch( err => {
            console.error(err)
        })
    }, [productId])

    return (
        <ItemDetail {...product}/>
    )
}

export default ItemDetailContainer