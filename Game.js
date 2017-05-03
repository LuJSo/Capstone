
var text = document.getElementById("text")
 var buttonBox = document.getElementById('submitButton')
 var input = document.getElementById('input')
 var player
 var score = 0
 var scoreText = makeText("Score: -", 660, 50, 25, "sans-serif", "white", 1)
  var namespace = "http://www.w3.org/2000/svg"


 input.onkeypress = function(event) {
   console.log(input.value);
   if(event.key == "Enter" || event.keyCode == 13) {
     player = input.value;
     input.parentNode.removeChild(input)
     advanceTo(scenario.two)
   }
 }
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



var advanceTo = function(s) {

  changeText(s.text)
  buttonChange(s.buttons)


};



var scenario = {
  one: {

    text: "You are walking and you see an old house, who wouldn't you want to go inside?\n",
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
    buttons: [["Collect note",  "advanceTo(scenario.five)"],["don't collect note", "advanceTo(scenario.random)"]]
},

random: {
  text: "you did not collect the note and you attempt to leave, but all the exits seem to have disappeared. ",
  buttons: [["Collect note", "advanceTo(scenario.five)"]]
},

    five: {
    text: "After collecting the note which appears to have chicken scratch written on it, the small door opens with a dimly lit corridor behind it.",
     buttons: [["Walk through corridor", "advanceTo(scenario.six)"]]
  },

};
advanceTo(scenario.one);
