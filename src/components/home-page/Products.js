import React, { useState, useEffect } from 'react'
import axios from 'axios';
export default function Products() {
    const [productsfetch, setProductsFetch] = useState([]);
    const [productsaxios, setProductsAxios] = useState([]);
    const productsFetch = () => {
        fetch('https://dummyjson.com/products').then(response => response.json()).then(response => setProductsFetch(response.products));
    }
    const productsAxios = async () => {
        const response = await axios.get('https://dummyjson.com/products')
        setProductsAxios(response.data.products);
    }
    useEffect(() => {
        productsFetch();
        productsAxios();
    }, [])
    console.log("productsFetch", productsfetch)
    console.log("productsAxios", productsaxios)

    return (
        <>
            {productsfetch.map(({ id, title, description, images }) => (
                <div className="col-md-3" key={id}>
                    <div className='card p-3 mb-2'>
                        <div className='text-center'>
                        <img src={images[0]} className="card-img-top" alt={title} />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{title.slice(0,20)} {title.length > 20 ? "..." : null }</h5>
                            <p className="card-text">{description.slice(0,50)} {description.length > 50 ? "..." : null }</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            ))}

        </>
    )
}
