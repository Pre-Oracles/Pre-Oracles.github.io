
const titleElement = document.getElementById("eventTitle").innerHTML 
const option1Element  = document.getElementById("choice1").innerHTML 
const option2Element  = document.getElementById("choice2").innerHTML 
const eventTextElement = document.getElementById("eventText").innerHTML
document.getElementById("eventTitle").innerHTML  = document.getElementById("eventTexting").innerHTML;
function startGame(){
    window.location.href= "index.html";
  }
  choice2.onclick = startGame;
  choice1.onclick = function varyElement(){
    document.getElementById("hp").innerHTML = (parseInt(document.getElementById("hp").innerHTML) + 1).toString();
  }
  
  class Event{
    constructor(title,choice1,choice2){
      this.title = title
      this.choice1 = choice1
      this.choice2 = choice2
    }
  }
  
      let tEvent = new Event(eventTextElement, "add health", "return");
      document.getElementById("eventTitle").innerHTML = tEvent.title;
      document.getElementById("choice1").innerHTML = tEvent.choice1;
      document.getElementById("choice2").innerHTML = tEvent.choice2;

  