const express = require("express");
const router = express.Router();
const restaurants = require('../data');
//http://localhost:3000/api
router.get('/',(req,res) => {
    res.send('<h1> Hello Restaurant API</h1>');
});
//http://localhost:3000/api/restaurant
router.get("/restaurant",(req,res) =>{
    //res.json(restaurants);
    res.render('index',{restaurants});
});
//http://localhost:3000/api/restaurant/1
router.get("/restaurant/:id",(req,res) =>{
    const restaurantId = Number.parseInt(req.params.id,10);
    const restaurant = restaurants.find((restaurant) => restaurant.id === restaurantId);
    res.json(restaurant);
});
//http://localhost:3000/api/restaurant
router.post("/restaurant",(req,res) =>{
    const newRestaurant = {
        ...req.body
      };
      restaurants.push(newRestaurant);
      res.json(newRestaurant);
});
//http://localhost:3000/api/restaurant/1
router.put("/restaurant/:id",(req,res) =>{
    const restaurantId = Number.parseInt(req.params.id,10);
  const restaurantIndex = restaurants.findIndex((restaurant) => restaurant.id === restaurantId);
  const updatedRestaurant = {
    id:restaurantId,
    ...req.body
  };
  restaurants[restaurantIndex] = updatedRestaurant;
  res.json(updatedRestaurant);
});
//http://localhost:3000/api/restaurant/1
router.delete("/restaurant/:id",(req,res) =>{
    const restaurantId = Number.parseInt(req.params.id,10);
  const restaurantIndex = restaurants.findIndex((restaurant) => restaurant.id === restaurantId);
  restaurants.splice(restaurantIndex,1);
  res.sendStatus(204);
});
module.exports = router;