var text = document.getElementById("text")
 var buttonBox = document.getElementById('submitButton')
 var input = document.getElementById('input')
 var player;

 input.onkeypress = function(event) {
   console.log(input.value);
   if(event.key == "Enter" || event.keyCode == 13) {
     player = input.value;
     input.parentNode.removeChild(input)
     advanceTo(scenario.two)
   }
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

    text: "You are walking and you see an old house, why wouldn't you want to go inside?\n",
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

    text: "",
    buttons: [["Follow your Dog Downstairs", "advanceTo(scenario.five)"],["Search the Kitchen for a knife", "advanceTo(scenario.five)"]]
  },
    five: {

    text: "TO BE CONTINUED...",

  },

};
advanceTo(scenario.one);
