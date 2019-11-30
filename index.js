var express = require('express');
const bodyParser = require('body-parser');
var db = require('./db')
var userRouter = require('./routes/user.route');
var port = 4400;
var app = express();


app.set('view engine' ,'pug');
app.set('views' , './views');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(express.static('public'));

app.get('/', function(request, response){
    response.render('index',{
        name:"AAAA"
    });
})

app.use('/users', userRouter);

app.listen(port, function(){
    console.log('Server listening on port 4400');
});

