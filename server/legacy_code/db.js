const mongoose = require("mongoose");
const LoremIpsum = require("lorem-ipsum").LoremIpsum;
mongoose.connect("mongodb://localhost/reviews", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const schema = mongoose.Schema({
  hotelId: Number,
  reviews: [
    {
      username: String,
      travelerType: String,
      userLocation: String,
      numberOfContributions: Number,
      helpfulVotes: Number,
      profileImage: String,
      postDate: Date,
      reviewScore: Number,
      reviewTitle: String,
      reviewText: String,
      stayDate: Date
    }
  ]
});

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 30,
    min: 10
  },
  wordsPerSentence: {
    max: 20,
    min: 10
  }
});

var Review = mongoose.model("Reviews", schema);

module.exports = {
  getReviewsbyID: (id, callback) => {
    Review.findOne({ hotelId: id }, callback);
  },
  Review: Review,
  lorem: lorem
};
