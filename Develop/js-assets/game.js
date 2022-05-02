const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        "question": "Inside which HTML element do we put the JavaScript file?",
        "choice1": "<script>",
        "choice2": "<javascript>",
        "choice3": "<js>",
        "choice4": "<scripting>",
        "answer": 1,
    },
    {
        "question": "Which is not a data type oof JavaScript?",
        "choice1": "Number",
        "choice2": "Boolean",
        "choice3": "String",
        "choice4": "Item",
        "answer": 4,
    },
    {
        "question": "What company developed JavaScript?",
        "choice1": "Apple",
        "choice2": "Verizon",
        "choice3": "Netscape",
        "choice4": "Mojang",
        "answer": 3,
    },
    {
        "question": "How do you write a function in JavaScript?",
        "choice1": "(fuction = )",
        "choice2": "function{}",
        "choice3": "function()",
        "choice4": "[]function",
        "answer": 3
    },
]