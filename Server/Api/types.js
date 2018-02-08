const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/getAll', (req, res) => {
  axios.get('http://pokeapi.co/api/v2/type/')
    .then(data => {
      // console.log(data.data.results);
      res.status(200).send(data.data.results);
    })
    .catch(err => {
      res.status(500).send(err);
    })
});

router.get('/getOne', (req, res) => {
  console.log(req.query.type);
  axios.get(`http://pokeapi.co/api/v2/type/${req.query.type}`)
    .then(data => {
      console.log(data.data);
      res.status(200).send(data.data);
    })
    .catch(err => {
      res.status(500).send(err);
    })
})

module.exports = router;