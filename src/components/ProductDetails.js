/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function ProductDetails()
{

    let { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [allProducts, setAllProducts] = useState([]);

    var url = "https://fakestoreapi.com/products/" + id;

    useEffect(() =>
    {
        fetch(url)
            .then(result => result.json())
            .then(
                (result) =>
                {
                    console.log(result);
                    setAllProducts(result);
                    setIsLoading(false);
                }
            )
    }, [isLoading, url]);


    return (

        <div>
            {/*  write new component here for display product details */}

            <h1>Details of product {id}</h1>
            <div className="product-details">
                <div className='product-img'>
                    <img src={allProducts.image} />
                </div>
                <div className='product-info'>
                    <h2 className='title'>
                        <span>Name:</span>  {allProducts.title} </h2>
                    <div className='desc'>
                        <span>Description:</span>
                        {allProducts.description}
                    </div>
                    <div className='last'>
                        <div className='price'>
                            <span>Price:</span>
                            {allProducts.price}
                        </div>
                        <div className='category'>
                            <span>Category:</span>
                            {allProducts.category}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
