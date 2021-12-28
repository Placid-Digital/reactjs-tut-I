var express = require("express");
var router = express.Router();
const https = require('https');


const axios = require('axios');




router.get("/",function(req,res,next){
 
        try {

            (async () => {
                try {


                  got.get('https://jsonplaceholder.typicode.com/users', {responseType: 'json'})
                    .then(res => {
                        const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
                        console.log('Status Code:', res.statusCode);
                        console.log('Date in Response header:', headerDate);

                        const users = res.body;
                        // for(user of users) {
                        // console.log(`Got user with id: ${user.id}, name: ${user.name}`);
                        // }
                    })
                    .catch(err => {
                        console.log('Error: ', err.message);
                    });


                } catch (error) {
                  console.log(error.response);
                }


              })();
       
         // res.send(response.body.explanation);
        
        } catch (error) {
          console.log(error)
          console.log("World Hello")
        }
       
    
   
})

module.exports=router;
