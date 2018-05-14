var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/swiper')

const User = require('../models/user');

/*this is how to add dog to a user. first create the user, (with the dog reference object.
) then push the dog to the array as below */
var users = [
  {
    userName: "doglover",
    firstName: "pete",
    lastName: "evans",
    email:"dog@luva.com",
    password:'1111'
  },
  {
    userName: "dogsrawesome",
    firstName: "jenny",
    lastName: "smith",
    email:"jenny@gmail.com",
    password:'1111'
  },
  {
    userName: "deathtocats",
    firstName: "buster",
    lastName: "thedog",
    email:"Iamadoag@k9.com",
    password:'1111'
  },
  {
    userName: "psalmdawg",
    firstName: "paul",
    lastName: "salmon",
    email:"paul@psalmdawg.com",
    password:'1111'
  },
  {
    userName: "littlelady",
    firstName: "emma",
    lastName: "watson",
    email:"emma@wats.com",
    password:'1111'
  },
  {
    userName: "ilikecheese",
    firstName: "fatty",
    lastName: "boomba",
    email:"fa@wman.com",
    password:'1111'
  },
  {
    userName: "letsgo",
    firstName: "john",
    lastName: "salmon",
    email:"john@john.com",
    password:'1111'
  },
  {
    userName: "digitalman",
    firstName: "dave",
    lastName: "farage",
    email:"dave@dave.com",
    password:'1111'
  },
  {
    userName: "sexyBiatch",
    firstName: "Crystal",
    lastName: "OpenLegs",
    email:"Crystal@Crystal.com",
    password:'1111'
  }

];

//
// var dogData = [
//   {
//     name: "badger",
//     breed: "collie",
//     sex: "male",
//     ownerEmail: "dave@dave.com",
//     about: "Play Dead sit nap lazy dog wet nose Tigger run fast fish lazy cat wagging hamster toy field yawn feathers ferret yawn aquarium.Feathers bird seed food scratcher mouse running teeth licks heel walk pet gate maine coon cat collar twine parakeet. Roll Over kitty barky critters litter stick window litter box wagging field toy. Whiskers harness biscuit food lick small animals throw meow house train. Bedding field hamster small animals carrier polydactyl groom vaccine. Commands running gimme five groom slobber run fast head ball litter box biscuit catch run fast roll over. Roll Over litter box tabby pet slobbery play dead kitty roll over small animals barky good boy string kitty fish licks teeth chew drool. ID Tag barky lick parakeet wet nose ball walk tabby wag tail chirp nest. Spike bird seed water teeth leash ball. Crate pet food stripes carrier drool slobbery tabby dog puppy birds walk roll over bird food Mittens pet supplies."
//   },
//   {
//     name: "banjo",
//     breed: "mutt",
//     sex: "male",
//     ownerEmail: "fa@wman.com",
//     about: "Play Dead sit nap lazy dog wet nose Tigger run fast fish lazy cat wagging hamster toy field yawn feathers ferret yawn aquarium.Feathers bird seed food scratcher mouse running teeth licks heel walk pet gate maine coon cat collar twine parakeet. Roll Over kitty barky critters litter stick window litter box wagging field toy. Whiskers harness biscuit food lick small animals throw meow house train. Bedding field hamster small animals carrier polydactyl groom vaccine. Commands running gimme five groom slobber run fast head ball litter box biscuit catch run fast roll over. Roll Over litter box tabby pet slobbery play dead kitty roll over small animals barky good boy string kitty fish licks teeth chew drool. ID Tag barky lick parakeet wet nose ball walk tabby wag tail chirp nest. Spike bird seed water teeth leash ball. Crate pet food stripes carrier drool slobbery tabby dog puppy birds walk roll over bird food Mittens pet supplies."
//   },
//   {
//     name: "chopper",
//     breed: "golden retriever",
//     sex: "male",
//     ownerEmail: "fa@wman.com",
//     about: "Play Dead sit nap lazy dog wet nose Tigger run fast fish lazy cat wagging hamster toy field yawn feathers ferret yawn aquarium.Feathers bird seed food scratcher mouse running teeth licks heel walk pet gate maine coon cat collar twine parakeet. Roll Over kitty barky critters litter stick window litter box wagging field toy. Whiskers harness biscuit food lick small animals throw meow house train. Bedding field hamster small animals carrier polydactyl groom vaccine. Commands running gimme five groom slobber run fast head ball litter box biscuit catch run fast roll over. Roll Over litter box tabby pet slobbery play dead kitty roll over small animals barky good boy string kitty fish licks teeth chew drool. ID Tag barky lick parakeet wet nose ball walk tabby wag tail chirp nest. Spike bird seed water teeth leash ball. Crate pet food stripes carrier drool slobbery tabby dog puppy birds walk roll over bird food Mittens pet supplies."
//   },
//   {
//     name: "ky",
//     breed: "golden retriever",
//     sex: "male",
//     ownerEmail: "fa@wman.com",
//     about: "Play Dead sit nap lazy dog wet nose Tigger run fast fish lazy cat wagging hamster toy field yawn feathers ferret yawn aquarium.Feathers bird seed food scratcher mouse running teeth licks heel walk pet gate maine coon cat collar twine parakeet. Roll Over kitty barky critters litter stick window litter box wagging field toy. Whiskers harness biscuit food lick small animals throw meow house train. Bedding field hamster small animals carrier polydactyl groom vaccine. Commands running gimme five groom slobber run fast head ball litter box biscuit catch run fast roll over. Roll Over litter box tabby pet slobbery play dead kitty roll over small animals barky good boy string kitty fish licks teeth chew drool. ID Tag barky lick parakeet wet nose ball walk tabby wag tail chirp nest. Spike bird seed water teeth leash ball. Crate pet food stripes carrier drool slobbery tabby dog puppy birds walk roll over bird food Mittens pet supplies."
//   },
//   {
//     name: "lego",
//     breed: "golden retriever",
//     sex: "male",
//     ownerEmail: "fa@wman.com",
//     about: "Play Dead sit nap lazy dog wet nose Tigger run fast fish lazy cat wagging hamster toy field yawn feathers ferret yawn aquarium.Feathers bird seed food scratcher mouse running teeth licks heel walk pet gate maine coon cat collar twine parakeet. Roll Over kitty barky critters litter stick window litter box wagging field toy. Whiskers harness biscuit food lick small animals throw meow house train. Bedding field hamster small animals carrier polydactyl groom vaccine. Commands running gimme five groom slobber run fast head ball litter box biscuit catch run fast roll over. Roll Over litter box tabby pet slobbery play dead kitty roll over small animals barky good boy string kitty fish licks teeth chew drool. ID Tag barky lick parakeet wet nose ball walk tabby wag tail chirp nest. Spike bird seed water teeth leash ball. Crate pet food stripes carrier drool slobbery tabby dog puppy birds walk roll over bird food Mittens pet supplies."
//   },
//   {
//     name: "petra",
//     breed: "chihuaha",
//     sex: "female",
//     ownerEmail: "Iamadoag@k9.com",
//     about: "Play Dead sit nap lazy dog wet nose Tigger run fast fish lazy cat wagging hamster toy field yawn feathers ferret yawn aquarium.Feathers bird seed food scratcher mouse running teeth licks heel walk pet gate maine coon cat collar twine parakeet. Roll Over kitty barky critters litter stick window litter box wagging field toy. Whiskers harness biscuit food lick small animals throw meow house train. Bedding field hamster small animals carrier polydactyl groom vaccine. Commands running gimme five groom slobber run fast head ball litter box biscuit catch run fast roll over. Roll Over litter box tabby pet slobbery play dead kitty roll over small animals barky good boy string kitty fish licks teeth chew drool. ID Tag barky lick parakeet wet nose ball walk tabby wag tail chirp nest. Spike bird seed water teeth leash ball. Crate pet food stripes carrier drool slobbery tabby dog puppy birds walk roll over bird food Mittens pet supplies."
//   },
//   {
//     name: "chunk",
//     breed: "staffy",
//     sex: "male",
//     ownerEmail: "dog@luva.com",
//     about: "Play Dead sit nap lazy dog wet nose Tigger run fast fish lazy cat wagging hamster toy field yawn feathers ferret yawn aquarium.Feathers bird seed food scratcher mouse running teeth licks heel walk pet gate maine coon cat collar twine parakeet. Roll Over kitty barky critters litter stick window litter box wagging field toy. Whiskers harness biscuit food lick small animals throw meow house train. Bedding field hamster small animals carrier polydactyl groom vaccine. Commands running gimme five groom slobber run fast head ball litter box biscuit catch run fast roll over. Roll Over litter box tabby pet slobbery play dead kitty roll over small animals barky good boy string kitty fish licks teeth chew drool. ID Tag barky lick parakeet wet nose ball walk tabby wag tail chirp nest. Spike bird seed water teeth leash ball. Crate pet food stripes carrier drool slobbery tabby dog puppy birds walk roll over bird food Mittens pet supplies."
//   },
//   {
//     name: "big boy",
//     breed: "kelpie",
//     sex: "male",
//     ownerEmail: "paul@psalmdawg.com",
//     about: "Play Dead sit nap lazy dog wet nose Tigger run fast fish lazy cat wagging hamster toy field yawn feathers ferret yawn aquarium.Feathers bird seed food scratcher mouse running teeth licks heel walk pet gate maine coon cat collar twine parakeet. Roll Over kitty barky critters litter stick window litter box wagging field toy. Whiskers harness biscuit food lick small animals throw meow house train. Bedding field hamster small animals carrier polydactyl groom vaccine. Commands running gimme five groom slobber run fast head ball litter box biscuit catch run fast roll over. Roll Over litter box tabby pet slobbery play dead kitty roll over small animals barky good boy string kitty fish licks teeth chew drool. ID Tag barky lick parakeet wet nose ball walk tabby wag tail chirp nest. Spike bird seed water teeth leash ball. Crate pet food stripes carrier drool slobbery tabby dog puppy birds walk roll over bird food Mittens pet supplies."
//   },
//   {
//     name: "chewy",
//     breed: "labradoodle",
//     sex: "female",
//     ownerEmail: "john@john.com",
//     about: "Play Dead sit nap lazy dog wet nose Tigger run fast fish lazy cat wagging hamster toy field yawn feathers ferret yawn aquarium.Feathers bird seed food scratcher mouse running teeth licks heel walk pet gate maine coon cat collar twine parakeet. Roll Over kitty barky critters litter stick window litter box wagging field toy. Whiskers harness biscuit food lick small animals throw meow house train. Bedding field hamster small animals carrier polydactyl groom vaccine. Commands running gimme five groom slobber run fast head ball litter box biscuit catch run fast roll over. Roll Over litter box tabby pet slobbery play dead kitty roll over small animals barky good boy string kitty fish licks teeth chew drool. ID Tag barky lick parakeet wet nose ball walk tabby wag tail chirp nest. Spike bird seed water teeth leash ball. Crate pet food stripes carrier drool slobbery tabby dog puppy birds walk roll over bird food Mittens pet supplies."
//   },
//   {
//     name: "rover",
//     breed: "poodle",
//     sex: "male",
//     ownerEmail: "emma@wats.com",
//     about: "Play Dead sit nap lazy dog wet nose Tigger run fast fish lazy cat wagging hamster toy field yawn feathers ferret yawn aquarium.Feathers bird seed food scratcher mouse running teeth licks heel walk pet gate maine coon cat collar twine parakeet. Roll Over kitty barky critters litter stick window litter box wagging field toy. Whiskers harness biscuit food lick small animals throw meow house train. Bedding field hamster small animals carrier polydactyl groom vaccine. Commands running gimme five groom slobber run fast head ball litter box biscuit catch run fast roll over. Roll Over litter box tabby pet slobbery play dead kitty roll over small animals barky good boy string kitty fish licks teeth chew drool. ID Tag barky lick parakeet wet nose ball walk tabby wag tail chirp nest. Spike bird seed water teeth leash ball. Crate pet food stripes carrier drool slobbery tabby dog puppy birds walk roll over bird food Mittens pet supplies."
//   },
//   {
//     name: "buster",
//     breed: "golden retriever",
//     sex: "male",
//     ownerEmail: "dave@dave.com",
//     about: "Play Dead sit nap lazy dog wet nose Tigger run fast fish lazy cat wagging hamster toy field yawn feathers ferret yawn aquarium.Feathers bird seed food scratcher mouse running teeth licks heel walk pet gate maine coon cat collar twine parakeet. Roll Over kitty barky critters litter stick window litter box wagging field toy. Whiskers harness biscuit food lick small animals throw meow house train. Bedding field hamster small animals carrier polydactyl groom vaccine. Commands running gimme five groom slobber run fast head ball litter box biscuit catch run fast roll over. Roll Over litter box tabby pet slobbery play dead kitty roll over small animals barky good boy string kitty fish licks teeth chew drool. ID Tag barky lick parakeet wet nose ball walk tabby wag tail chirp nest. Spike bird seed water teeth leash ball. Crate pet food stripes carrier drool slobbery tabby dog puppy birds walk roll over bird food Mittens pet supplies."
//   },
//   {
//     name: "barcly",
//     breed: "pug",
//     sex: "female",
//     ownerEmail: "dave@dave.com",
//     about: "Play Dead sit nap lazy dog wet nose Tigger run fast fish lazy cat wagging hamster toy field yawn feathers ferret yawn aquarium.Feathers bird seed food scratcher mouse running teeth licks heel walk pet gate maine coon cat collar twine parakeet. Roll Over kitty barky critters litter stick window litter box wagging field toy. Whiskers harness biscuit food lick small animals throw meow house train. Bedding field hamster small animals carrier polydactyl groom vaccine. Commands running gimme five groom slobber run fast head ball litter box biscuit catch run fast roll over. Roll Over litter box tabby pet slobbery play dead kitty roll over small animals barky good boy string kitty fish licks teeth chew drool. ID Tag barky lick parakeet wet nose ball walk tabby wag tail chirp nest. Spike bird seed water teeth leash ball. Crate pet food stripes carrier drool slobbery tabby dog puppy birds walk roll over bird food Mittens pet supplies."
//   },
//   {
//     name: "bella",
//     breed: "flatcoat retriever",
//     sex: "female",
//     ownerEmail: "dave@dave.com",
//     about: "Play Dead sit nap lazy dog wet nose Tigger run fast fish lazy cat wagging hamster toy field yawn feathers ferret yawn aquarium.Feathers bird seed food scratcher mouse running teeth licks heel walk pet gate maine coon cat collar twine parakeet. Roll Over kitty barky critters litter stick window litter box wagging field toy. Whiskers harness biscuit food lick small animals throw meow house train. Bedding field hamster small animals carrier polydactyl groom vaccine. Commands running gimme five groom slobber run fast head ball litter box biscuit catch run fast roll over. Roll Over litter box tabby pet slobbery play dead kitty roll over small animals barky good boy string kitty fish licks teeth chew drool. ID Tag barky lick parakeet wet nose ball walk tabby wag tail chirp nest. Spike bird seed water teeth leash ball. Crate pet food stripes carrier drool slobbery tabby dog puppy birds walk roll over bird food Mittens pet supplies."
//   }
//
// ]
//
//
// var reviews = [
//   {
//     score:5,
//     title:"Really good at walking dogs",
//     body:"Looked after dogs very well!, will use again",
//     writtenAbout: "dave@dave.com"
//     // writtenBy:
//   },
//   {
//     score:5,
//     title:"Really good at walking dogs",
//     body:"Looked after dogs very well!, will use again",
//     writtenAbout: "emma@wats.com"
//     // writtenBy:
//   },
//   {
//     score:5,
//     title:"Really good at walking dogs",
//     body:"Looked after dogs very well!, will use again",
//     writtenAbout: "dave@dave.com"
//     // writtenBy:
//   },
//   {
//     score:5,
//     title:"Really good at walking dogs",
//     body:"Looked after dogs very well!, will use again",
//     writtenAbout: "paul@psalmdawg.com"
//     // writtenBy:
//   },
// ]

// FIND  USER BY EMAIL
// User.findOne({
//   email:'emma@wats.com'
// }, (err, res)=>{
//   if(err){
//     console.log(err)
//   } else {
//     console.log("user FOUND: ",res)
//   }
// });


// function seedReviews(reviews){
//   reviews.forEach(function(review){
//     console.log(review.writtenAbout)
//     Review.create({
//       score:review.score,
//       title:review.title,
//       body:review.body
//     }, (err, savedReview) => {
//       console.log("SEX ", review.writtenAbout)
//       User.findOne({ email: review.writtenAbout }, function(err, foundUser){
//         if(err){
//           console.log(err)
//         } else {
//           // console.log("DOG NAME: ",dog.name)
//           // console.log("DOG OWNER EMAIL: ", dog.ownerEmail)
//           console.log("USER " ,foundUser)
//           foundUser.reviews.push(savedReview);
//           foundUser.save(function(err, res){
//             if(err){
//               console.log(err)
//             } else {
//               console.log(res)
//             }
//           });
//         }
//       });
//     });
//   })
// };




seedDb(users)
// seedDogs(dogData);
// seedReviews(reviews);

//
// function seedDogs(dogs){
//   dogs.forEach(function(dog){
//     console.log(dog.ownerEmail)
//     Dog.create({
//       name:dog.name,
//       breed:dog.breed,
//       sex:dog.sex,
//       about:dog.about,
//       ownerEmail:dog.ownerEmail
//     }, (err, dog) =>{
//       console.log("SEX ", dog.ownerEmail)
//       User.findOne({email: dog.ownerEmail}, function(err, foundOwner){
//         if(err){
//           console.log(err)
//         } else {
//           console.log("DOG NAME: ",dog.name)
//           console.log("DOG OWNER EMAIL: ", dog.ownerEmail)
//           console.log("OWNER " ,foundOwner)
//           foundOwner.dogs.push(dog);
//           foundOwner.save(function(err, res){
//             if(err){
//               console.log(err)
//             } else {
//               console.log(res)
//             }
//           });
//         }
//       });
//     });
//   })
// };
// //
//
//


function seedDb(data){
  data.forEach(function (item){
    console.log(item.userName)
    User.create({
      userName: item.userName,
      firstName: item.firstName,
      lastName: item.lastName,
      email: item.email,
      password:item.password,
      location:item.location,
      postcode:item.postcode,
      dob:item.dob
    }, (err, res)=>{
      if(err){
        console.log(err)
      } else {
        console.log(res)
      }
    })
  });
}







//
// Dog.create({
//   name: "Millie",
//     breed: "Retriever",
//     sex: "Female",
// }, function(err, dog){
  // User.findOne({
  //   email:"paul@paul.com"
  // }, function(err, foundUser){
  //   if(err){
  //     console.log(err);
//     } else {
//       foundUser.dogs.push(dog);
//       foundUser.save(function(err, res){
//         if(err){
//           console.log(err)
//         } else {
//           console.log(res)
//         }
//       });
//     };
//   });
// });
// let user1 = new User({
//   email: "paul@paul.com",
//   userName: "pauly",
//   password: "1111"
// })
//
// user1.save(function(err, res){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(res)
//   }
// })
//
// let user2 = new User({
//   email: "test@test.com",
//   userName: "test",
//   password: "1111"
// })
//
// user1.save(function(err, res){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(res)
//   }
// })
//
// let user3 = new User({
//   email: "dave@dave.com",
//   userName: "dave",
//   password: "1111"
// })
//
// user1.save(function(err, res){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(res)
//   }
// })
//
//
// let dog1 = new Dog({
//   name: "Johnny",
//   breed: "Poodle",
//   sex: "Female",
//   owner:
// })



// dog1.save(function(err, res){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(res)
//   }
// })

// let dog2 = new Dog({
//   name: "Ruby",
//   breed: "Flat Coat Retriever",
//   sex: "Female"
// })
//
// dog2.save(function(err, res){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(res)
//   }
// })
//
// let dog3 = new Dog({
//   name: "Mutty McMuttface",
//   breed: "Mutt",
//   sex: "Male"
// })
//
// dog3.save(function(err, res){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(res)
//   }
// })
