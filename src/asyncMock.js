const products = [
    {id:1, name: "Begonia", category: "Plantines", price: 9, img:"../images/begonia.jpg", img2:"../images/begonia2.jpeg", description: "Flor de Azúcar (Begonia semperflorens) en plug de 288 unidades"},
    {id: 2, name: "Alegria", category: "Plantines", price: 8, img:"../images/alegria.jpg", img2:"../images/alegria2.jpeg", description: "Alegría del Hogar (Impatiens Walleriana) en plug de 288 unidades"},
    {id: 3, name: "Maceta N12", category: "Macetas", price: 10, img:"../images/m12.jpeg", img2:"../images/m12b.jpg", description: "Maceta termoformada número 12 color terracota"},
    {id: 4, name: "Sustrato Lambert", category: "Insumos", price: 3500, img:"../images/sustrato.png", img2:"../images/sustrato2.jpg", description:"Sustrado importado a base de turba Canadiense marca Lambert"}
]

export const getProducts = (category) => {
    return new Promise((resolve) => {
        const categoryProducts = products.filter (p => p.category.toLowerCase() === category)
        setTimeout(() => {
            resolve(category !== undefined ? categoryProducts : products)
        }, 2000)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        const prod = products.find(p => p.id === parseInt(id))
        setTimeout(() => {
            resolve(prod)
        }, 2000)
    })
}