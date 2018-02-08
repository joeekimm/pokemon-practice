const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', (req, res) => {
  axios.get(`http://pokeapi.co/api/v2/pokemon/${req.query.pokemon}`)
    .then(data => {
      // console.log(data.data);
      res.status(200).send(data.data);
    })
    .catch(err => {
      res.status(500).send(err);
    })
});

module.exports = router;