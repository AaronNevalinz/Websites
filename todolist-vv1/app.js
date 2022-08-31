const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static('public'));

const items = [];

app.get('/', function(req, res){
    let date = new Date();
    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    }
    let today = date.toLocaleDateString('en-US', options);
    res.render('list', {getDate:today, newListItem: items});
});

app.post('/', function(req, res){
    let item = req.body.newItem;
    items.push(item);
    res.redirect('/');
});

app.listen(3000);