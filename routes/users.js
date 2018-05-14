const express = require('express');
const router = express.Router();
const User = require('../models/user');

const userCtrl = require('../controllers/usersController');
const searchCtrl = require('../controllers/searchController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index')
});

router.get('/search', searchCtrl.searchSuitor)


router.post('/new', userCtrl.new)



module.exports = router;

//
// Person.
//   find({
//     occupation: /host/,
//     'name.last': 'Ghost',
//     age: { $gt: 17, $lt: 66 },
//     likes: { $in: ['vaporizing', 'talking'] }
//   }).
//   limit(10).
//   sort({ occupation: -1 }).
//   select({ name: 1, occupation: 1 }).
//   exec(callback);
//
// // Using query builder
// Person.
//   find({ occupation: /host/ }).
//   where('name.last').equals('Ghost').
//   where('age').gt(17).lt(66).
//   where('likes').in(['vaporizing', 'talking']).
//   limit(10).
//   sort('-occupation').
//   select('name occupation').
//   exec(callback);
