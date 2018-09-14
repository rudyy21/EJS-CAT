var express = require('express');
var app = express();
app.use(express.static(__dirname + '/static'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

all_cats = [
    {name: "Tom", favorite_food: 'Pizza', age: '121', sleep:['Under the bed', 'In the ocean']}, 
    {name: "CornJulio", favorite_food: 'sushi', age: '12', sleep:['Roof', 'The sun']}, 
    {name: "ABC", favorite_food: 'hot cheetos', age: '1', sleep:['The dojo', 'Bikini bottom']}, 
];




app.get('/cats', function(request,response){
    response.render('cats')
})

app.get('/tom', function(request,response){
    response.render('details', {cats:all_cats[0]});
})

app.get('/cornJulio', function(request,response){
    response.render('details', {cats:all_cats[1]});
})

app.get('/abc', function(request,response){
    response.render('details', {cats:all_cats[2]});
})


app.listen(8000, function (){
    console.log('Im listening on 8000');
})