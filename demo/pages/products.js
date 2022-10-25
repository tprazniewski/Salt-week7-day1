import { useEffect, useState } from "react"
import Link from 'next/link'

const Products = () => {

const [products, setProducts] = useState(null)

useEffect( ()=> {
    const URL = 'https://fakestoreapi.com/products/'
    fetch(URL)
    .then(res => {return res.json()})
    .then((data)=> {console.log(data) 
        setProducts(data)
    })

    console.log("wlazlo")
    console.log(products)
},[])


return (
        <div>
            <h1> Products!! </h1>
        
            
                {products && products.map(product => {
                   return (
                    <div>
                        <h1>
                            <Link href={`/customers/${product.id}`}>{product.title}</Link>
                        </h1>
                        <p> {product.price}</p>
                        <p> {product.category}</p>
                        <img src={product.image} alt="image" width="500" height="600"/>
                    </div> )
                })}
 
             
        </div>
    )
}

module.exports = Products