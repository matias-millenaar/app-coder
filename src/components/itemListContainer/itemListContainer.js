import { useState, useEffect } from "react";
import {getProducts} from "../../asyncMock.js";
import ItemCount from "../ItemCount/ItemCount.js"
import ItemList from "../ItemList/ItemList.js";

const  ItemListContainer = ({greetings}) => {

    const[products, setProducts] = useState([])
    
    useEffect(() => {
        getProducts().then(products => {
            setProducts(products)
        })
    }, [])


    function handleOnAdd(count) {
        if (count > 1) {
            console.log(`${count} items added to cart`)
        } else {
            console.log(`${count} item added to cart`);
        }   
    }

    return (
        <>
            <h1> {greetings} </h1>
            <ItemCount stock={10} initial={1} onAdd={handleOnAdd}/>
            <ItemList productsArray={products}/>
        </>
    )
}

export default ItemListContainer