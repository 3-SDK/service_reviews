const db = require("./db.js");

var arrayOfLocations = [
  "Denver",
  "Philadelphia",
  "Sacramento",
  "New York",
  "San Francisco",
  "Toronto",
  "Wildwood",
  "Atlanta",
  "Seattle"
];
var arrayOfTravelerTypes = [
  "Families",
  "Couples",
  "Solo",
  "Business",
  "Friends"
];

var randomDate = (start, end) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

var getRandomNumber = (min, max) => {
  return Math.ceil(Math.random() * (max - min) + min);
};

var getRandomComment = () => {
  return {
    username: "kenny" + getRandomNumber(1, 400),
    travelerType:
      arrayOfTravelerTypes[
        Math.floor(Math.random() * arrayOfTravelerTypes.length)
      ],
    userLocation:
      arrayOfLocations[Math.floor(Math.random() * arrayOfLocations.length)],
    numberOfContributions: Math.floor(Math.random() * Math.floor(40)),
    helpfulVotes: Math.floor(Math.random() * Math.floor(20)),
    profileImage: "https://i.ibb.co/HFb6VvX/avatar.png",
    postDate: randomDate(new Date(2019, 0, 1), new Date()),
    reviewScore: getRandomNumber(0, 5),
    reviewTitle: db.lorem.generateWords(2),
    reviewText: db.lorem.generateSentences(getRandomNumber(10, 30)),
    stayDate: randomDate(new Date(2019, 0, 1), new Date())
  };
};
for (var i = 0; i < 100; i++) {
  var randomComments = [];
  for (var j = 1; j <= getRandomNumber(50, 100); j++) {
    var randomComment = getRandomComment();
    randomComments.push(randomComment);
  }
  db.Review.create({
    hotelId: i,
    reviews: randomComments
  });
}
