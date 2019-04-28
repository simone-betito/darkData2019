#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

var myText = "Provide a personalized experience for you: Your experience on Facebook is unlike anyone else's: from the posts, stories, events, ads, and other content you see in News Feed or our video platform to the Pages you follow and other features you might use, such as Trending, Marketplace, and search. We use the data we have - for example, about the connections you make, the choices and settings you select, and what you share and do on and off our Products - to personalize yo. Connect you with people and organizations you care about: We help you find and connect with people, groups, businesses, organizations, and others that matter to you across the Facebook Products you use. We use the data we have to make suggestions for you and others - for example, groups to join, events to attend, Pages to follow or send a message to, shows to watch, and people you may want to become friends with. Stronger ties make for better communities, and we believe our services are most useful when people are connected to people, groups, and organizations they care abouEmpower you to express yourself and communicate about what matters to you: There are many ways to express yourself on Facebook and to communicate with friends, family, and others about what matters to you - for example, sharing status updates, photos, videos, and stories across the Facebook Products you use, sending messages to a friend or several people, creating events or groups, or adding content to your profile. We also have developed, and continue to explore, new ways for people to use technology, such as augmented reality and 360 video to create and share more expressive and engaging content on Facebook.Help you discover content, products, and services that may interest you: We show you ads, offers, and other sponsored content to help you discover content, products, and services that are offered by the many businesses and organizations that use Facebook and other Facebook Products. Our partners pay us to show their content to you, and we design our services so that the sponsored content you see is as relevant and useful to you as everything else you see on our Products.Combat harmful conduct and protect and support our community: People will only build community on Facebook if they feel safe. We employ dedicated teams around the world and develop advanced technical systems to detect misuse of our Products, harmful"; 

// this function is to find word bounding boxes
function getWordBounds(container, keyword) {

	var finds = [];
	// go through all words in the first selected text box
	// duplicate the code and use selections[1] for the second container
	b.words(container, function(word) {
		// the variable word is a basil object, not just the text. so, to get the actual text:
		var wordText = word.contents;
		
		// check if text is the word we're looking for
		if(wordText == keyword) {
			// add the bounds to the list
			finds.push(b.bounds(word));
		}

	});	
	// give back the list of words
	return finds;
}

// get the currently selected elements -> has to be two text containers!
var selections = b.selections();

// find the word occurences in the old and new terms of service (aka. the selected text boxes)
// var boundsOldTerms = getWordBounds(selections[0], "data");
// var boundsNewTerms = getWordBounds(selections[1], "data");
// var boundsOldTerms = getWordBounds(selections[0], "privacy");
// var boundsNewTerms = getWordBounds(selections[1], "privacy");

var boundsOldTerms = getWordBounds(selections[0], "products");
var boundsNewTerms = getWordBounds(selections[1], "products");

// var boundsOldTerms = getWordBounds(selections[0], "third-party");
// var boundsNewTerms = getWordBounds(selections[1], "third-party");


//function draw() {
//   b.stroke(67, 87, 173);
//   b.strokeWeight(0.75);
		// b.stroke(137, 147, 124);
		// b.strokeWeight(0.75);

		b.stroke(104, 104, 104);
		b.strokeWeight(0.75);

		// b.stroke(181, 131, 141);
		// b.strokeWeight(0.75);
//}


for (var i = 0; i < boundsOldTerms.length; i++) {
	for (var y = 0; y < boundsNewTerms.length; y++) {

		b.line(boundsOldTerms[i].left, boundsOldTerms[i].top, boundsNewTerms[y].left, boundsNewTerms[y].top)
	}
//   var xPos = myBox.left;
//   var yPos = myBox.top;
}

// so for example:
// var myBox = boundsOldTerms[0];
// var xPos = myBox.left;
// var yPos = myBox.top;
// b.println(xPos);
// b.println(yPos);

b.go();