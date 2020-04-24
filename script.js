//create start button variable
var startBtn = document.querySelector("#startButton");
var container = document.querySelector("#container");


//create questions var
var questions = [
    {
        question: "What tag is required in all HTML documents, and is used to define the title?",
        a:"(a) <title></title>",
        b:"(b) <footer>",
        c:"(c)<head></head>",
    },
    // {
    //     question: "What tag is required in all HTML documents, and is used to define the title?\n(a) <title></title>\n\(b) <footer>\n (c)<head></head>",
    //     answer: "a"
    // },
    // {
    //     question: "What tag is required in all HTML documents, and is used to define the title?\n(a) <title></title>\n\(b) <footer>\n (c)<head></head>",
    //     answer: "a"
    // },
    // {
    //     question: "What tag is required in all HTML documents, and is used to define the title?\n(a) <title></title>\n\(b) <footer>\n (c)<head></head>",
    //     answer: "a"
    // },
];
//create score var
var score = 0;

// create render function
function renderQuest() {
    // Clear question element and load new question
    container.innerHTML = "";
  
    // Render a new question
    for (var i = 0; i < questions.length; i++) {
     var h2 = document.createElement("h2");
        h2.textContent = questions[i].question;
            container.appendChild(h2);

    // var linebreak = document.createElement("br");
    //     h2.appendChild(linebreak);
        
      var btnA = document.createElement("button");
        btnA.textContent = questions[i].a;
            btnA.setAttribute("class", ".btn btn-dark");
                h2.appendChild(btnA);
                    // btnA.appendChild(linebreak);

      var btnB = document.createElement("button");
        btnB.textContent = questions[i].b;
            btnB.setAttribute("class", ".btn btn-dark");
                h2.appendChild(btnB);
                    // btnB.appendChild(linebreak);

      var btnC = document.createElement("button");
        btnC.textContent = questions[i].c;
            btnC.setAttribute("class", ".btn btn-dark");
                h2.appendChild(btnC);
                    // btnC.appendChild(linebreak);
  
    }
  
  }

//create startBtn listener
startBtn.addEventListener("click", function () {
    event.preventDefault();

    // Create the countdown timer.
    var secondsLeft = 120;

    var timeEl = document.querySelector("#time");

    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);

        }

    }, 1000);

    renderQuest();

    //create if and else
    if ()

    //create question loop
//     for (var i = 0; i < questions.length; i++) {
//         //ask question to user and get response
//         var response = window.prompt(questions[i].question);
//         if (response === questions[i].answer) {
//             alert("Correct!");
//         }
//         else {
//             alert("Wrong!");
//             timeEl--;
//         }
//     }
//     alert("you got" + score);
 });

//var questOne = document.createElement("h2");
//questOne.innerHTML = question[1].value;