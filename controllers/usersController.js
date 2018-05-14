const User = require('../models/user');

exports.new = (req, res, next)=>{
  // console.log(req.body)
  const timeStamp = new Date().getTime()
  var email = req.body.email;
  var password = req.body.password;
  // console.log('email and password', email, password)
  if(!email || !password){
    return res.status(422).send({error: "You must provide an email and password"})
  }

  //check to see if user exists
  User.findOne({email:email}, function(err, existingUser){
    if(err) { return next(err); }

    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }

    var user = new User({
      email: email,
      password: password,
      createdAt: timeStamp
    })

    user.save(function(err){
      if(err) { console.log(err) }
      res.json({ user_id: user._id })
    })
  })
}
