document.addEventListener('DOMContentLoaded',function(){
    //Prevent Noobs From Changing Variable
  let quotes = [{"quote":"Mike The Frog","source":'Ajarn Mike at Treehouse',"citation":"Treehouse Video","Date":2015,"tags":"Education"}
    ,{"quote":"This is Juthawong!","source":'Juthawong Naisanguansee',"citation":"Juthawong Naisanguansee after introduce to stranger","Date":2013,"tags":"Business"}
    ,{"quote":"Do you know my father?","source":'Thai Politician Son',"citation":"In the news , Thai Politician son Shoot Stranger at The Club","Date":2010,"tags":"Crime"}
    ,{"quote":"Many have plan but not many execute it","source":'My Father',"citation":"My Father drinking chinese tea in morning","Date":2008,"tags":"Family"}
    ,{"quote":"Code is Poem","source":'Some developer on internet',"citation":"Wordpress Forum","Date":2009,"tags":"Quotes"}
  ]; //Chane From Array inside object to Object inside array as Requirement say. :) . Change Property name Year To Date


  var firstload = true; //To check whether it does thing like First load without reload page after click Play again
  var backgroundcolordefa = ["#2ecc71","#e74c3c","#3498db"];
  // event listener to respond to "Show another quote" button clicks
  // when user clicks anywhere on the button, the "printQuote" function is called
  function randomQuote (){
    return  quotes.splice(Math.floor(Math.random() * quotes.length),1)[0]; //One line , Random Index of Quotes and Remove it using splice , Return Of Splice Value is array that has object inside. To return object directly , I select the first array index.
  }

  function getRandomQuote(){
    if(firstload){
      document.getElementById('loadQuote').innerHTML = 'Show another quote'; //Reload The button for UX
      firstload = false; //After Load set it to false
    }
    if(quotes.length > 0){ //If there still quote left
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
    if(defanotempty(randquote.Date)){ renderhtml += '<span class="year"> '+ randquote.Date + ' </span>'; }
    renderhtml += '</p>';
    if(defanotempty(randquote.tags)){renderhtml += '<p class="tag">'+ randquote.tags +'</p>';}
    document.getElementById('quote-box').innerHTML = renderhtml
  }else{
    quotes = [{"quote":"Mike The Frog","source":'Ajarn Mike at Treehouse',"citation":"Treehouse Video","Date":2015,"tags":"Education"}
    ,{"quote":"This is Juthawong!","source":'Juthawong Naisanguansee',"citation":"Juthawong Naisanguansee after introduce to stranger","Date":2013,"tags":"Business"}
    ,{"quote":"Do you know my father?","source":'Thai Politician Son',"citation":"In the news , Thai Politician son Shoot Stranger at The Club","Date":2010,"tags":"Crime"}
    ,{"quote":"Many have plan but not many execute it","source":'My Father',"citation":"My Father drinking chinese tea in morning","Date":2008,"tags":"Family"}
    ,{"quote":"Code is Poem","source":'Some developer on internet',"citation":"Wordpress Forum","Date":2009,"tags":"Quotes"}
  ];
  backgroundcolordefa = ["#2ecc71","#e74c3c","#3498db","#2c3e50","#16a085"]; //Reload Everything
  firstload = true;
  }
  }

  document.getElementById('loadQuote').addEventListener("click", printQuote, false);
  printQuote(); //Load Quote at init
  setInterval(printQuote,30000); //Change Quote Every 30 Second

});
