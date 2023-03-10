const express=require('express')
const fitnessApi=require('../Api/fitnessApi')
const fitness=express.Router()

fitness.route('/fitness').get(fitnessApi.apicontroller);

module.exports=fitness;