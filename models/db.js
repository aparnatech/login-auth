const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/login', {useNewUrlParser: true}, (err) => {
        if(!err){
        console.log('Mongo connection success');
    } else {
        console.log('err', +err);
    }
});
require('./login.js')