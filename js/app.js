function shareScore(score) {
  var text = "I scored " + score + " points at 2048 Game.";
			 
 	var rdl = TwoPlus.createRDL({
     	noun: "score",
     	displayTitle: text,
     	displayThumbnailUrl: "http://emmafuller.github.io/2048/meta/apple-touch-icon.png",
     	displayText: "Try to beat my score :P",
     	json: {},
     	callback: window.location.href,
     });

     TwoPlus.setPasteboard(rdl);
     TwoPlus.exit();  
}
