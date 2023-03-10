const express=require('express')
const foodApi=require('../Api/foodApi')
const food=express.Router()

food.route('/food').get(foodApi.apicontroller);

module.exports=food;