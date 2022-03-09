import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList.js";
import {  useParams } from "react-router-dom"
import { getDocs, collection, query, where } from "firebase/firestore"
import { firestoreDb } from "../../services/firebase/firebase.js";

const  ItemListContainer = () => {
    const[products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {

        const collectionRef = categoryId ? 
            query(collection(firestoreDb, "products"), where("category", "==", categoryId)) :
            collection(firestoreDb, "products")

        getDocs(collectionRef).then(response => {
            const products = response.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            })
            setProducts(products)
        }).catch( err => {
            console.error(err);
        })
    }, [categoryId])

    return (
        <ItemList productsArray={products}/>
    )
}

export default ItemListContainer