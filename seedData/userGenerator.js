console.log('user Generator connected')
var fs = require('fs');
const User = require('../models/user');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/swiper')
var boysNames;
var girlsNames;
var familyNames;
var postCodes;
var userNames;



let readTheFiles = function(callBack){

  let boyData = fs.readFileSync('boyNames.txt', 'utf8');
  let girlData = fs.readFileSync('girlNames.txt', 'utf8');
  let familyData = fs.readFileSync('familyNames.txt', 'utf8');
  let postCodeData = fs.readFileSync('postCodes.txt', 'utf8');
  let userNameData = fs.readFileSync('wordList.txt', 'utf8');

  boysNames = boyData.toString().split("\n")
  girlsNames = girlData.toString().split("\n")
  familyNames = familyData.toString().split("\n")
  postCodes = postCodeData.toString().split("\n")
  userNames = userNameData.toString().split("\n")

  callBack(boysNames, girlsNames, familyNames, postCodes, userNames)

}

readTheFiles(createUsers)

function seedDbUsers(data){
  data.forEach(function (item){

    User.create({
      userName: item.userName,
      firstName: item.firstName,
      lastName: item.lastName,
      postCode:item.postCode,
      dob:item.dob,
      active:item.active,
      sex:item.sex,
      orientation:item.orientation
    }, (err, res)=>{
      if(err){
        console.log(err)
      } else {
        console.log('users loaded')
      }
    })
  });
  console.log('done')
}


function createUsers(boys, girls, family, postCodes, userNames){
  //generate 2500 males and female users .

  let maleUsersArr = []
  let femaleUsersArr = []

  for(i=0;i<2500;i++){

    var maleUser = {
      userName: userNames[Math.round(Math.random() * userNames.length)] + Math.round(Math.random() * 999).toString(),
      firstName: boys[Math.round(Math.random() * boys.length)],
      lastName: family[Math.round(Math.random() * family.length)],
      dob: Math.floor(Math.random() * ((2000-1930)+1) + 1930),
      sex: 'male',
      active: true,
      orientation: assignOrientation(),
      postCode: postCodes[Math.round(Math.random() * postCodes.length)]
    }

    maleUsersArr.push(maleUser)

    var femaleUser = {
      userName: userNames[Math.round(Math.random() * userNames.length)] + Math.round(Math.random() * 999).toString(),
      firstName: girls[Math.round(Math.random() * boys.length)],
      lastName: family[Math.round(Math.random() * family.length)],
      dob: Math.floor(Math.random() * ((2000-1930)+1) + 1930),
      sex: 'female',
      active: true,
      orientation: assignOrientation(),
      postCode: postCodes[Math.round(Math.random() * postCodes.length)]
    }
    femaleUsersArr.push(femaleUser)

  }

  // console.log(femaleUsersArr)
  seedDbUsers(maleUsersArr)
  seedDbUsers(femaleUsersArr)

}


function assignOrientation(){
  let number = Math.round(Math.random() * 100 );
  let orientation;
  // console.log(number)
  if(number < 55){
    orientation = 'heterosexual'
  } else if(number >= 55 && number < 85){
    orientation = 'homosexual'
  } else {
    orientation = 'bisexual'
  }

  return orientation
}
