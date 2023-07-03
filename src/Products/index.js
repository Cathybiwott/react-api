import React, {useEffect, useState} from "react"; 

const Products = ()=>{
    const [products, setProducts] = useState([]);
    const [loading, setloading] = useState(false);
    useEffect(()=>{
        (async()=>{
            await getProducts();
        })()

    },[]);
    console.log({});

    const getProducts = async () =>{
        try{
            const response = await fetch('https://dummyjson.com/products')
            const result = await response.json();
            setProducts(result.products);
            setloading(false);
        }
        catch(error){
            console.log(error.message);
        }
    }
    return(
        <div>
          <h2>List of Products</h2>
          {products.map(item =>{
            <div key ={item.id}>
                <h3>{item.title}</h3>
                </div>
          })}
        </div>
    );
};
export default Products;