const express=require('express')
const bollywoodApi=require('../Api/bollywoodApi')
const bollywood=express.Router()

bollywood.route('/bollywood').get(bollywoodApi.apicontroller);

module.exports=bollywood;