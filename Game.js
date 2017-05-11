/***********/
/* Used video blah blah blah */
/************/


 var text = document.getElementById("text")
 var buttonBox = document.getElementById('submitButton')
 var input = document.getElementById('input')
 var player
 var score = 0
 var scoreWords = makeText("Score: ", 660, 50, 25, "sans-serif", "white", 1)
 var scoreText = makeText(" -", 720, 50, 25, "sans-serif", "white", 1)
  var namespace = "http://www.w3.org/2000/svg"



 function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
   var text = document.createElementNS(namespace, "text")
   text.innerHTML = message
   text.setAttribute("x", x)
   text.setAttribute("y", y)
   text.setAttribute("font-size", fontSize)
   text.setAttribute("font-family", fontFamily)
   text.setAttribute("fill", fill)
   text.setAttribute("opacity", opacity)

   var canvas = document.getElementById("canvas")
   canvas.appendChild(text)
   return text
 }

 var changeText = function(words) {
  text.innerHTML = words.replace("Your", player);
}




var buttonChange = function(ListButtons) {
  submitButton.innerHTML = "";
  for(var i = 0; i < ListButtons.length; i++) {
    submitButton.innerHTML += "<button onClick="+ListButtons[i][1]+">" + ListButtons[i][0] + "</button>";
  }
}



function advanceTo(s) {

  changeText(s.text)
  buttonChange(s.buttons)

 };
function addScore(s) {
  score = score +1
  scoreText.innerHTML = score
  advanceTo(s)
}

function passState() {
  
}


var scenario = {
  one: {

    text: "You are walking and you see an old house, who wouldn't you want to go inside?",
    buttons:  [["Enter House", "advanceTo(scenario.two)"]]
  },
  two: {

    text: "You enter the house, you see two long corridors, which do you take?",
    buttons: [["Left corridor", "advanceTo(scenario.three)"],["Right corridor", "advanceTo(scenario.four)"]]
  },
  three: {

    text: "You proceed down the Left corridor, the dark brown walls appear to be turning purple, maybe you are just sick from the 2 month old szechuan sauce you ate earlier.",
    buttons: [["continue", "advanceTo(scenario.four)"]]
  },
    four: {
    text: "you proceed down the corridor, you arrive in a dimly lit room with a note on the wall and a small door next to it.  ",
    buttons: [["Collect note",  "addScore(scenario.five)"],["don't collect note", "advanceTo(scenario.random)"]]
},

random: {
  text: "you did not collect the note and you attempt to leave, but all the exits seem to have disappeared. ",
  buttons: [["Collect note", "addScore(scenario.five)"]]
},

    five: {
    text: "After collecting the note which appears to have chicken scratch written on it, the small door opens with a dimly lit corridor behind it.",
     buttons: [["Walk through corridor", "advanceTo(scenario.six)"]]
  },

  six: {
    text: "Walking through the corridor, you hear footsteps and something breathing moving rapidly towards you"
  }

};
advanceTo(scenario.one);
