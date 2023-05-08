const express = require('express');
const bodyParser = require('body-parser');
const minimist = require('minimist');
const args = minimist(process.argv.slice(2));
const rpsls = require('./lib/lib/rpsls')

const app = express();
const port = args.port ? args.port : 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// GET routes
app.get('/app/', (req, res) => {
    res.status(200);
    res.send('200 OK');
});

app.get('/app/rps/', (req, res) => {
    res.send(rpsls.rps());
});

app.get('/app/rpsls/', (req, res) => {
    res.send(rpsls.rpsls());
});

app.get('/app/rps/play/', (req, res) => {
    res.send(rpsls.rps(req.query.shot))
});

app.get('/app/rpsls/play/', (req, res) => {
    res.send(rpsls.rpsls(req.query.shot))
});

app.get('/app/rps/play/:shot', (req, res) => {
    res.send(rpsls.rps(req.params.shot));
});

app.get('/app/rpsls/play/:shot', (req, res) => {
    res.send(rpsls.rpsls(req.params.shot));
});

// POST routes
app.post('/app/rps/play/', (req, res) => {
    res.send(rpsls.rps(req.body.shot));
});

app.post('/app/rpsls/play/', (req, res) => {
    res.send(rpsls.rpsls(req.body.shot));
})

// All other (invalid) routes here
app.get('*', (req, res) => {
    res.status(404);
    res.send('404 NOT FOUND');
});

app.listen(port);