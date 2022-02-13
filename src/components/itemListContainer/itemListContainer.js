import ItemCount from "../ItemCount/ItemCount.js"

const  ItemListContainer = ({greetings}) => {

    function onAdd(count) {
        if (count > 1) {
            console.log(`${count} items added to cart`)
        } else {
            console.log(`${count} item added to cart`);
        }   
    }
    
    return (
        <>
            <div>
                <h1> {greetings} </h1>
            </div>
            <ItemCount stock="10" initial="1" onAdd={onAdd}/>
        </>
    )
}

export default ItemListContainer