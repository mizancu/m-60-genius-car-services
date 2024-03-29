import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name, price, description, img} = service;
    return (
        <div className='service'>
            <img src={img} className='w-100' alt="" />
            <h2>Name: {name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;