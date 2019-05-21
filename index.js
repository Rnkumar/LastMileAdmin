var express = require("express");
var app = express();
var cors = require('cors');
var path = require('path');

app.get("/tone", cors(), function(req, res) {
    const vader = require('vader-sentiment');
    const text = req.query.text;
    const intensity = vader.SentimentIntensityAnalyzer.polarity_scores(text);
    res.status(200).json(intensity);
});

// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');

app.get("/chek", cors(), function(req, res) {
    res.status(200).send("hello");
});

app.get("/", function(req, res) {
    res.render('index');
})

app.get("/data", function(req, res) {
    res.render('testdynamicpanel');
})

const PORT = process.env.PORT | 3000;

app.listen(PORT, function() {
    console.log("Listening in PORT:" + PORT);
});