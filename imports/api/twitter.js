import {Meteor} from  'meteor/meteor';
import Secret  from './secret.js';

//var Twit = require('twit');

Twit = new TwitMaker(Secret);

//
//  tweet 'hello world!'
//
// Twit.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
//   console.log(data)
// })

// Twit.get('search/tweets', { q: 'petrogustavo ivanduque  since:2018-03-11', count: 1}, function(err, data, response) {
//   console.dir(data)
// }) 

//
//  stream a sample of public statuses
//
// var stream = Twit.stream('statuses/filter', { track: 'stefanmedina' })

// stream.on('tweet', function (tweet) {
//   console.log(tweet)
// })

Meteor.methods({

	"trends.list"(){
		// load Future
		Future = Npm.require('fibers/future');
		var myFuture = new Future();

		Twit.get('trends/place', { id: 23424787 } , function(err, data, response) {
			if(err){
			  myFuture.throw(err);
			}else{
			  myFuture.return(data[0].trends);
			}
		})
      	return myFuture.wait();
	} 

});

