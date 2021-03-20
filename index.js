var readlineSync=require("readline-sync");
var userName=readlineSync.question("What's your name? ");
console.log("Welcome "+userName+" to HOW WELL DO YOU KNOW F.R.I.E.N.D.S?");

var questions=[
  {
    question: "What are the names of Rachel's two sisters? ",
    answer:"jill and amy"
  },{
    question: "Which fashion brand did Rachel become the executive of from season 5? ",
    answer: "ralph lauren"
  },{
    question: "Besides the main six cast members, which character features the most throughout the entire series? ",
    answer: "gunther"
  },{
    question: "What type of car does Monica's dad give her? ",
    answer: "porsche"
  },{
    question: "What food does Phoebe crave during her pregnancy with the triplets? ",
    answer: "meat"
  }
]

var score=0;
 
function play(questions){
  for (var i=0; i<questions.length; i++){
    var userAnswer=readlineSync.question(questions[i].question);
    if(userAnswer.toUpperCase()===questions[i].answer.toUpperCase()){
      console.log("Right!");
      score=score+1;
      console.log("----------------------------------");
    }else{
      console.log("Wrong!");
      console.log("----------------------------------");
    }
    console.log("Your current score is: "+score);
  }
}

play(questions);
console.log("CONGRATULATIONS! You finished the quiz. \nYour final score is: "+score);
if(score>=4){
  console.log("YOU ARE A TRUE F.R.I.E.N.D.S FAN :)");
}