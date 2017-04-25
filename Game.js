var text = document.getElementById("text");
 var buttonBox = document.getElementById('submitButton');
 var input = document.getElementById('input');
 var player;

 input.onkeypress = function(event) {
   console.log(input.value);
   if (event.key == "Enter" || event.keyCode == 13) {
     player = input.value;
     input.parentNode.removeChild(input)
     advanceTo(scenario.two)
   }
 };

 var changeText = function(words) {
  text.innerHTML = words.replace("Your", player);
};

var changeButtons = function(buttonList) {
  submitButton.innerHTML = "";
  for (var i = 0; i < buttonList.length; i++) {
    submitButton.innerHTML += "<button onClick="+buttonList[i][1]+">" + buttonList[i][0] + "</button>";
  };
};

var advanceTo = function(s) {
  changeText(s.text)
  changeButtons(s.buttons)
};

var scenario = {
  one: {

    text: "You are walking and you see an old house, why wouldn't you want to go inside?\n",
  },
  two: {

    text: "",
    buttons: [["Turn and run", "advanceTo(scenario.three)"],["Enter The House", "advanceTo(scenario.four)"]]
  },
  three: {

    text: "",
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
