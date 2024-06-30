import React from 'react';
import { CDN_URL } from '../utils/constants';

const RestaurantCard = ({ info }) => {

    const { name, locality, avgRating, sla } = info;

    return (
        <div className='res-card'>
            <img
                className='res-logo'
                alt="image"
                src={CDN_URL + info.cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{locality}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.deliveryTime} mins</h4>
        </div>
    )
}


export default RestaurantCard;
