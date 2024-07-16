import React from 'react';
import { CDN_URL } from '../utils/constants';
import { useNavigate } from 'react-router-dom';

const RestaurantCard = ({ info }) => {

    const navigate = useNavigate();

    const { name, locality, avgRating, sla, id } = info;


    const handleClick = () => {
        navigate(`/restaurants/${id}`);
    }


    return (
        <div
            className='res-card'
            onClick={handleClick}
        >
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
