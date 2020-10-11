(function (){function Question(question, answer1, answer2, answer3, correct){
    this.question=question;
    this.answer1=answer1;
    this.answer2=answer2;
    this.answer3=answer3;
    this.correct=correct;
}
var currentScore=0;
Question.prototype.ask=
function(){
    console.log(this.question);
        console.log(`0: ${this.answer1}`);
        console.log(`1: ${this.answer2}`);
        console.log(`2: ${this.answer3}`);
        var answ=prompt("choose your answer");
        if (answ==this.correct){
            console.log("correct answer");
            currentScore++;
            console.log(`Your current score is ${currentScore}`);
            console.log("--------------");
            arr[Math.floor(Math.random()*3)].ask();
        }
        else if(answ.toLowerCase()=="exit"){
            console.log("GAME OVER");
        }
        else{
            console.log("please try again");
            console.log(`Your current score is ${currentScore}`);
            console.log("--------------");
            arr[Math.floor(Math.random()*3)].ask();
        }
}
var quest1=new Question(
    "How many oceans are there in the world?",
    "three",
    "four",
    "five",
    2
);
var quest2=new Question(
    "What year did WW2 start?",
    "1939",
    "1941",
    "1945",
    0
);
var quest3=new Question(
    "Which animal species do bats belong to?",
    "birds",
    "mammals",
    "insects",
    1
);
var arr=[quest1,quest2,quest3];
arr[Math.floor(Math.random()*3)].ask();
})();