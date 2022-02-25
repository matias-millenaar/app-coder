import { useState, useEffect } from "react";
import { getProducts } from "../../asyncMock.js";
import ItemList from "../ItemList/ItemList.js";
import {  useParams } from "react-router-dom"

const  ItemListContainer = () => {
    const[products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {
        getProducts(categoryId).then(products => {
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