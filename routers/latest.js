const express=require('express')
const latestApi=require('../Api/latestApi')
const latest=express.Router()

latest.route('/latest').get(latestApi.apicontroller);

module.exports=latest;