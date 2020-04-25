//create start button variable
var startBtn = document.querySelector("#startButton");


//create questions var
var questions = [
    {
        question: "What tag is required in all HTML documents, and is used to define the title?",
        choices: ["<title></title>","<footer>", "<head></head>"],
        answer: "<title></title>"
    },
    {
        question: "How do you create an element in javaScript?",
        choices: ["querySelection","createElement", "createID"],
        answer: "createElement"
    },
    {
        question: "What does # symbolize in css?",
        choices: ["id","class", "button"],
        answer: "id"
    },
    {
        question: "How do you create an unordered list in html?",
        choices: ["<ul></ul>","<footer>", "<li></li>"],
        answer: "<ul></ul>"
    },
];
//create score var
var score = 0;
var current = 0;
var output = document.querySelector("#container");
var secondsLeft = 120;
var timerInterval;


function newQuest() {
    output.innerHTML ="";
    var h2 = document.createElement("h2");
        h2.textContent = questions[current].question;
            output.appendChild(h2);

     var list = document.createElement("ul");
        list.setAttribute("style", "list-style:none");
             output.appendChild(list);

        for (var x = 0; x< questions[current].choices.length; x++){
            var li = document.createElement("li");
            list.appendChild(li);
            var button = document.createElement("button");
                button.setAttribute("class", "btn btn-dark answer");
            var choice = document.createTextNode(questions[current].choices[x]);

            button.setAttribute("value", choice);

            button.appendChild(choice);
            li.appendChild(button);
        }
}


const nextQuest = function(e){
if (e.target.matches(".answer")){
    var newP = document.createElement("p");
    if (this.textContent === questions[current].answer){
        newP.textContent = "Correct!";
    }
    else{
        newP.textContent = "Wrong";
        secondsLeft -= 10;
    }
    output.appendChild(newP);
current++;
newQuest();
}
}
const leaderBoard = function(e){
    if(nextQuest = ""){
        var newH2 = document.createElement("h2");
        newH2.textContent = "Congrats you have completed the quiz. Now add your initials to the leaderboard!";
            output.appendChild(newH2);

    }
}


output.addEventListener("click", nextQuest);

//create startBtn listener

startBtn.addEventListener("click", function () {
    event.preventDefault();

    // Create the countdown timer.

    var timeEl = document.querySelector("#time");

        timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(timerInterval);

        }
    

    }, 1000);

    newQuest();


 });