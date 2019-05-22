const express = require('express')
const Router = require('router')
const router = Router()

router.get('/', function (req, res) {
  res.render("userdata/signup",{

  });
});

module.exports = router