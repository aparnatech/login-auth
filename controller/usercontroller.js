const express = require('express');
const Router = require('router')
const router = Router()


router.get('/', function (req, res) {
  res.render("userdata/login",{
    title: 'login'
  });
});
router.post('/', function (req, res) {
  insertRecord(req, res);
});
function insertRecord(req, res){
  var user = new Users(req.body);
  user.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
}
router.get('/ki', function (req, res) {
  res.json(req);
});
module.exports = router