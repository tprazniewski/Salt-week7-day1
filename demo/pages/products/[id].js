import { useEffect, useState } from "react"
import { useRouter } from 'next/router'


const Products = () => {
const [product, setProduct] = useState([])
const router = useRouter()
const { id } = router.query

useEffect( ()=> {
    if(!router.isReady) return;

    const URL = 'https://fakestoreapi.com/products/'
    fetch(URL)
    .then(res => {return res.json()})
    .then((data)=> {
        return  data
    })
    .then((data)=> {
        console.log(id)
        const result = data.find(el=> el.id == id)
        console.log(result)
        setProduct(result)
    })

},[router.isReady])

console.log("rendered")
return (
        <div>
            <h1> Product-{id} </h1>
         {product && <div>
                    <h1>{product.title} </h1>
                    <p> {product.price}</p>
                    <p> {product.category}</p>
                    <img src={product.image} alt="image" width="500" height="600"/>
                    <p> {product.description}</p>
            </div>}

 
             
         </div>
    )
}

module.exports = Products