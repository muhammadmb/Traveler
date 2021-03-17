import React from 'react';
import Background from '../../images/img-1.jpg'

export default function Products() {
    return <h1 className='products' style={{ backgroundImage: `url(${Background})` }}>Products</h1>;
}