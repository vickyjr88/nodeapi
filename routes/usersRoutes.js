const express = require('express')
const router = express.Router()
const WpUser = require('../models/WpUser')
const db = require('../config/database')

router.get('/', (req, res) => {
    const users = WpUser.findAll()
    .then((results) => {
        console.log(results);
        res.send(results);
    })
    .catch((err) => {
        console.log(err);
        console.log('Kamenuka')
    });
    
});

module.exports = router;
