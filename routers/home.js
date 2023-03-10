const express=require('express')
const homeApi=require('../Api/homeApi')
const home=express.Router()

home.route('/home').get(homeApi.apicontroller);

module.exports=home;