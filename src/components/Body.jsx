import RestaurantCard from "./RestaurantCard";
import resData from "../utils/resData";
import { useState } from "react";

const Body = () => {

    let resList = resData;

    const [listOfRestaurants , setListOfRestaurants] = useState(resData);

    return (
        <div className='body'>
            <div className='filter'>
                <button
                    onClick={() => {
                        let newList = listOfRestaurants.filter((restaurant)=>restaurant.info.avgRating>=4.8);
                        setListOfRestaurants(newList);
                        // console.log(resList);
                    }}
                    className="filter-btn"
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className='res-container'>
                {listOfRestaurants.map((restaurant) => {
                    return (
                        <RestaurantCard
                            key={restaurant?.info?.id}
                            info={restaurant?.info}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Body;