import React, { useState, useEffect } from "react";
import { Typography, CardMedia, CardContent, Card } from "@mui/material";
import Shimmer from "./Shimmer";

const Cards = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Data:", data);
        const restaurantList =
          data?.data?.cards
            ?.map((card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            ?.flat()
            ?.filter(Boolean) || [];

        setRestaurants(restaurantList);
      })
      .catch((error) => console.error("Error fetching restaurants:", error));
  }, []);

  if (restaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "40px", justifyContent: "center" }}>
      {(
        restaurants.map((restaurant) => (
          <Card key={restaurant.info.id} sx={{ width: 250, boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="140"
              image={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.info.cloudinaryImageId}`}
              
              alt={restaurant.info.name}
            />

            <CardContent>
              <Typography variant="h6">{restaurant.info.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {restaurant.info.cuisines.join(", ")}
              </Typography>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
};

export default Cards;
