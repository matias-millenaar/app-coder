const products = [
    {id:1, name: "Begonia", category: "Plantines florales", price: 9, img:"./images/begonia.jpg"},
    {id: 2, name: "Alegria", category: "Plantines florales", price: 8, img:"./images/alegria.jpg"},
    {id: 3, name: "Maceta N12", category: "Macetas", price: 10, img:"./images/m12.jpeg"},
    {id: 4, name: "Sustrato Lambert", category: "Insumos", price: 3500, img:"./images/sustrato.png"}
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}