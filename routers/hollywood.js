const express=require('express')
const hollywoodapi=require('../Api/hollywoodApi')
const hollywood=express.Router()

hollywood.route('/hollywood').get(hollywoodapi.apicontroller);

module.exports=hollywood;