const express=require('express')
const helloApi=require('../Api/helloApi')
const hello=express.Router()

hello.route('/hello').get(helloApi.apicontroller);

module.exports=hello;