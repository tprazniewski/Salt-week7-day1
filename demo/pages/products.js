import { useEffect, useState } from "react"

const Products = () => {

const [products, setProducts] = useState(null)

const fetchData = async () =>{


    // ---------------------------------------------------------------
    // const URL = 'https://fakestoreapi.com/products/'
    // const apiResponse = await fetch(URL)
    // const apiData = await apiResponse.json()
    // console.log(apiData)
    //  setProducts('apiData',apiData)
    //  console.log('products',products)
    //  console.log('inside effect')

}

useEffect( ()=> {
    const URL = 'https://fakestoreapi.com/products/'
    fetch(URL)
    .then(res => {return res.json()})
    .then((data)=> {console.log(data) 
        setProducts(data)})

    console.log("wlazlo")
    console.log(products)
},[])


return (
        <div>
            <h1> Products!! </h1>
        
            
                {products && products.map(product => {
                   return (<div>
                    <p> {product.title}</p>
                    <p> {product.price}</p>
                    <p> {product.category}</p>
                    <img src={product.image} alt="image" width="500" height="600"/>
                    </div> )
                })}
            
             
        </div>
    )
}

module.exports = Products