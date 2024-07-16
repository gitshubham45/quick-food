import RestaurantCard from "./RestaurantCard";
import resData from "../utils/resData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    // let resList = resData;

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);

    useEffect(() => {
        // console.log("Use effect called");
        fetchData();
        // console.log
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.884414730546371&lng=77.66828103894301&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        const result = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(result);

        setListOfRestaurants(result);

        setFilteredRestaurants(result);
    }

    const handleSearch = () => {
        console.log(searchText);
        const filteredRestaurants = listOfRestaurants.filter((res) => {
            return res.info.name.toLowerCase().includes(searchText.toLowerCase());
        });

        console.log(filteredRestaurants);

        setFilteredRestaurants(filteredRestaurants);
    }



    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className='body'>

            <div className='filter'>
                <div className="search">
                    <input
                        id="search"
                        type="text"
                        className="search-box"
                        onChange={(e) => { setSearchText(e.target.value) }}
                    />
                    <button
                        className="search-button"
                        onClick={handleSearch}
                    >Search
                    </button>
                </div>
                <button
                    onClick={() => {
                        let newList = listOfRestaurants.filter((restaurant) => restaurant.info.avgRating >= 4.8);
                        setListOfRestaurants(newList);
                    }}
                    className="filter-btn"
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className='res-container'>
                {filteredRestaurants.map((restaurant) => {
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