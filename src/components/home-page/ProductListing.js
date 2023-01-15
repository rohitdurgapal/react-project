import React from 'react'
import Products from './Products'
export default function ProductListing() {
    return (
        <div className='products-listing'>
            <h2 className='mt-2 mb-2'>Product Listing</h2>
            <div className='row'>
                <Products />
            </div>
        </div>
    )
}
