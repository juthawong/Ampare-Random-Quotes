document.addEventListener('DOMContentLoaded',function(){
  //Prevent Noobs From Changing Variable From console by putting it inside function
  let quotes = {"quote":['Mike The Frog','This is Juthawong!','Do you know my father?','Many have plan but not many execute it','Code is poem'],
  "source":['Ajarn Mike at Treehouse','Juthawong Naisanguansee','Thai Politician Son' ,'My Father','Some developer on internet'],
  "citation":['Treehouse Video','Juthawong Naisanguansee after introduce to stranger','In the news , Thai Politician son Shoot Stranger at The Club','My Father drinking chinese tea in morning','Wordpress Forum'],
  "year":[2015,2013,2010,2008,2009],
  "tags":['education','business','crime','family','quote']
}; 
var firstload = true; //To check whether it does thing like First load without reload page after click Play again
var backgroundcolordefa = ["#2ecc71","#e74c3c","#3498db"];

function randomQuote (){
  let rand = Math.floor(Math.random() * quotes.quote.length);
  let tmpquote = Object.create(quotes);
  tmpquote.quote = quotes.quote.splice(rand, 1); //Get Current Array and Remove it
  tmpquote.source = quotes.source.splice(rand, 1);
  tmpquote.citation = quotes.citation.splice(rand, 1)
  tmpquote.year = quotes.year.splice(rand, 1);
  tmpquote.tags = quotes.tags.splice(rand, 1);
  return tmpquote;
}
function getRandomQuote(){
  if(firstload){
    document.getElementById('loadQuote').innerHTML = 'Show another quote'; //Reload The button for UX
    firstload = false; //After Load set it to false
  }
  if(quotes.quote.length > 0){ //If there still quote left
    return randomQuote();
  }else{
    document.getElementById('loadQuote').innerHTML = 'Play Again ?'; //Change Button Ask To Playagain
    document.getElementById('quote-box').innerHTML = '<p class="quote"> No More Quotes</p>'; //Change Screen to say that there is no more quotes
    return false;
  }
}
function defanotempty(str){
  return (str || str.length > 0); //return true when string is not empty

}
function printQuote(){
  document.body.style.backgroundColor = backgroundcolordefa.splice(Math.floor(Math.random() * backgroundcolordefa.length),1); // Change background color and remove them to prevent dudplicate
  var randquote;
  if(randquote = getRandomQuote()){ //Check that it isn't end

  var renderhtml   =  '<p class="quote"> '+ randquote.quote +' </p><p class="source">'+randquote.source; // I use renderhtml as temporary variable before change html dom to prevent auto correct add div that break the code
  if(defanotempty(randquote.citation)){   renderhtml += '<span class="citation"> '+ randquote.citation +' </span>'; }
  if(defanotempty(randquote.year)){ renderhtml += '<span class="year"> '+ randquote.year + ' </span>'; }
  renderhtml += '</p>';
  if(defanotempty(randquote.tags)){renderhtml += '<p class="tag">'+ randquote.tags +'</p>';}
  document.getElementById('quote-box').innerHTML = renderhtml
}else{
   quotes = {"quote":['Mike The Frog','This is Juthawong!','Do you know my father?','Many have plan but not many execute it','Code is poem'],
  "source":['Ajarn Mike at Treehouse','Juthawong Naisanguansee','Thai Politician Son' ,'My Father','Some developer on internet'],
  "citation":['Treehouse Video','Juthawong Naisanguansee after introduce to stranger','In the news , Thai Politician son Shoot Stranger at The Club','My Father drinking chinese tea in morning','Wordpress Forum'],
  "year":[2015,2013,2010,2008,2009],
  "tags":['education','business','crime','family','quote']};

backgroundcolordefa = ["#2ecc71","#e74c3c","#3498db","#2c3e50","#16a085"]; //Reload Everything
firstload = true;
}
}
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
  // event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
printQuote(); //Load Quote at init
setInterval(printQuote,30000); //Change Quote Every 30 Second
});
