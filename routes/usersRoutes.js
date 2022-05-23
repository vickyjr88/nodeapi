const md5 = require('md5');
const jwt = require('jsonwebtoken');
const express = require('express')
const router = express.Router()
const WpUser = require('../models/WpUser')
const db = require('../config/database')

router.get('/', (req, res) => {
    WpUser.findAll()
    .then((results) => {
        res.send(results);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500)
    });
});

router.post('/login', (req, res) => {
    if(req.body.username === undefined || req.body.password === undefined) res.sendStatus(400)
    WpUser.findOne({ where: { user_login: req.body.username,  user_pass: md5(req.body.password)} })
    .then((result) => {
        if(result === null) res.sendStatus(403)
        const token = jwt.sign(result.dataValues, process.env.ACCESS_TOKEN_KEY)
        res.send({token});
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500)
    });
});

module.exports = router;
