const express = require('express')
const router = express.Router()

// router.get('/city/:cityName', function (req, res) {

// })

router.get('/coo', function (req, res) {
    // res.cookie('id', '254856445').send('cookie set'); //Sets name = express
    // console.log(req.cookies.name);
    res.end()

});

module.exports = router