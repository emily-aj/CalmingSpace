// list of quotes
var quotesList = [
  {quote:"Do what you can, with what you have, where you are.",
    author:"-Theodore Roosevelt"},
  {quote:"When you're at the end of your rope, tie a knot and hold on.",
    author:"-Theodore Roosevelt"},
  {quote:"Courage is not having the strength to go on; it's going on when you don't have the strength.",
    author:"-Theodore Roosevelt"},
  {quote:"In times of stress, the best thing we can do for each other is to listen with our ears and our hearts and to be assured that our questions are just as important as our answers.",
    author:"-Fred Rogers"},
  {quote:"When I was a boy and I would see scary things in the news. My mother would say to me, 'Look for the helpers. You will always find people who are helping.'",
    author:"-Fred Rogers"},
  {quote:"Grief and resilience live together.",
    author:"-Michelle Obama"},
  {quote:"I can be changed by what happens to me. But I refuse to be reduced by it.",
    author: "-Maya Angelou"},
  {quote:"What lies behind us and what lies ahead of us are tiny matters compared to what lies within us.",
    author: "-Ralph Waldo Emerson"},
  {quote:"The human capacity for burden is like bamboo - far more flexible than you'd ever believe at first glance.",
    author: "-Jodi Picoult, My Sister's Keeper"},
  {quote:"The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.",
    author:"-Martin Luther King Jr."},
  {quote:"When you feel overwhelmed, remember: A little at a time is how it gets done. One thing, one task, one moment at a time.",
    author:"-Anonymous"},
  {quote:"Hey you, keep living. It won't always be this overwhelming.",
    author:"-Jacqueline Whitney"},
  {quote:"Life is like riding a bicycle. To keep your balance, you must keep moving.",
    author:"-Albert Einstein"},
  {quote:"Everything negative - pressure, challenges - is all an opportunity for me to rise.",
    author:"-Kobe Bryant"},
  {quote:"My mama always said, life is like a box of chocolates. You never know what you're gonna get.",
    author:"-Forrest Gump"},
  {quote:"In three words I can sum up everything I've learned about life: It goes on.",
    author:"-Robert Frost"},
  {quote:"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    author: "-Dr.Seuss"}
];


// generates a random quote on click in a timed transition
$("#newQuoteButton").click( function() {
  var transitionTime = 700
  //fade out old text
  $("#quote").fadeOut(transitionTime);
  $("#author").fadeOut(transitionTime);
  setTimeout(function(){
    //links random number to quote index number
    var quoteNumber = Math.floor(Math.random()*quotesList.length);
    //sets new quote and new quote author
    var quote = quotesList[quoteNumber].quote;
    var quoteAuthor = quotesList[quoteNumber].author;
    $("#quote").text(quote);
    $("#author").text(quoteAuthor);
  }, transitionTime)
  //fade in new quote
  $("#quote").fadeIn();
  $("#author").fadeIn();
});


//calming sounds

  //click event handlers for each sound icon
  $("#birdIcon").click(function(){playSounds("#birdIcon","birdSounds")});
  $("#thunderIcon").click(function(){playSounds("#thunderIcon","thunderSounds")});
  $("#rainIcon").click(function(){playSounds("#rainIcon", "rainSounds")});
  $("#muteIcon").click(function(){stopSounds()});

  //plays sound
  function playSounds (img_iconID, sound_id){
    stopSounds();
    //set all icon borders to none
    $("img").css("border", "none");
    //set border for clicked icon
    $(img_iconID).css("border", "1.5px solid");
    //play
    var soundFile = document.getElementById(sound_id);
  	soundFile.play();
  };

  //stops sounds
  function stopSounds() {
    //list of sound IDs
    var sound_ids = ["birdSounds", "thunderSounds", "rainSounds"]
    //sets border to mute icon
    $("img").css("border", "none");
    $("#muteIcon").css("border", "1.5px solid #474747");
    //pauses each sound from sound_ids
    for (i=0; i<sound_ids.length; i++){
      var soundFile = document.getElementById(sound_ids[i]);
    	soundFile.pause();
    };
  };
