const User = require('../models/user');


exports.searchSuitor = (req,res,next) => {

  var currentYear = new Date().getFullYear();
  User.find({
    orientation: req.query.orientation.toString(),
    sex: req.query.gender.toString(),
    active: true,
    dob: { $gt: currentYear - req.query.maxAge, $lt: currentYear - req.query.minAge }
  }, (err, result) => {
    if(err) return next(err);

    res.render('searchResults', { results: resulter(result) } )
  })
}

function resulter(res){
  console.log('resulter');
  let newResults = [];
  let thisYear = new Date().getFullYear()
  // console.log(thisYear)

  res.forEach((res)=>{
    // console.log(thisYear - res.dob)
    let user = {
      firstName: res.firstName,
      lastName: res.lastName,
      userName: res.userName,
      age: thisYear - res.dob,
      location: res.postCode,
      sex:res.sex

    }
    newResults.push(user);
  })




  return newResults

}
