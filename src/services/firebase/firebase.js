import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getDocs, collection, query, where, doc, getDoc, writeBatch, addDoc} from "firebase/firestore"


const firebaseConfig = {
    apiKey: process.env.REACT_APP_ApiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
};

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        const collectionRef = categoryId ? 
            query(collection(firestoreDb, "products"), where("category", "==", categoryId)) :
            collection(firestoreDb, "products")

        getDocs(collectionRef).then(response => {
            const products = response.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            })
            resolve(products)
        }).catch((error) => {
            reject("Error obteniendo productos: ", error)
        })
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve, reject) => {
        const docRef = doc(firestoreDb, "products", productId)

        getDoc(docRef).then(response => {
            const product = { id: response.id, ...response.data()}
            resolve(product)
        }).catch((error) => {
            reject("Error obteniendo producto: ", error)
        })
    })
}

export const pushOrder = (order, onSuccess, onError) => {
    const batch = writeBatch(firestoreDb)
    const outOfStock = []
    let processedItems = 0

    order.items.forEach(prod => {
        getDoc(doc(firestoreDb, 'products', prod.id))
            .then(response => {

                processedItems++

                if(response.data().stock >= prod.quantity) {
                    batch.update(doc(firestoreDb, 'products', response.id), {
                        stock: response.data().stock - prod.quantity
                    })
                } else {
                    outOfStock.push({ id: response.id, ...response.data()})
                }
            })
            .then(() => {
                if(processedItems === order.items.length) {

                    if(outOfStock.length === 0) {

                        addDoc(collection(firestoreDb, 'orders'), order)
                        .then(({id}) => {
                            batch.commit().then(() => {
                                onSuccess(id)
                            })
                        }).catch(error => {
                            console.error(error)
                        })
                    } else {
                        onError(outOfStock)
                    }
                }
            })
    })
}