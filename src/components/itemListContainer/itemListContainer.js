import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList.js";
import { useParams } from "react-router-dom"
import { getProducts } from "../../services/firebase/firebase.js";

const ItemListContainer = () => {
    const[products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)

        getProducts(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            return error
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId])

    return (
        <>
        {
            loading ?
                <h2>Cargando, por favor espere...</h2> :
            products.length ?
                <ItemList productsArray={products}/> :
                <h2>No se encontraron productos</h2>
        }
        </>
    )
}

export default ItemListContainer