$(document).ready(function () {
    var questions = [
    //Question 1
        {
            question: 'What is the biggest prize pool in the history of Esports?',
            choices: ['45 thousand', '7 million', '33 million', '480 thousand', '18 million'],
            correct: 4,
            correctDetails: 'The International 2015 18 million dollars! '
    },

    //Question 2
        {
            question: 'What is the most played competitive game?',
            choices: ['League of Legends', 'DOTA', 'CS:GO', 'SC:2', 'StarWars'],
            correct: 0,
            correctDetails: 'League of Legends has 67 million players a month.'
    },

    //Question 3
        {
            question: 'What is Twitch?',
            choices: ['Infection', 'Streaming service', 'Coaching', 'PR service', 'Ninjas'],
            correct: 1,
            correctDetails: 'Twitch is a streaming service, similar to youtube for esports.'
    },

    //Question 4
        {
            question: 'Twitch averages how many viewers per month?',
            choices: ['13,000,000', '29,000,000', '33,000,000', '6,000,000'],
            correct: 1,
            correctDetails: '29Million average views a month!'
    },

    //Question 5
        {
            question: 'What countries have won the largest total prize pools?',
            choices: ['UK', 'China', 'USA', 'Sweden', 'Korea'],
            correct: 1,
            correctDetails: 'China has just edged the USA at a massive 33,275,584 in prize pool earnings.'
    }

    ];

    /* Hide Quiz+result when loaded */
    $('.primarysection').hide();
    $('.results').hide();

    /* variables */

    var questionNum = 0;
    var questionTotal = questions.length;
    var correctTotal = 0;

    /* On quiz start */

    $('#startButton').click(function () {
        $('.intro').hide();
        $('.results').hide();
        $('.primarysection').show();
        var urlString = 'url(../images/EG.jpg)';
        document.getElementById("body").style.backgroundImage = urlString;
        /* Clearing results container */
        $('#result_msg').empty();
        questionDisplay();
    })

    /* submit button >< */
    $('#submitAnswer').click(function () {
        /* Hide current question, open next? */
        /* nextQuestion(); */
        var answer = $("input[class='option']:checked").val();
        console.log(answer);
        var correctAnswer = questions[questionNum].correct;
        console.log(correctAnswer);
        if (answer == correctAnswer) {
            //if correct answer was selected
            correctTotal++;
            console.log(correctTotal);
            //console.log(correctTotal);
        }
        //quiz is finished, show result-section
        if ((questionNum + 1) == questionTotal) {

            $('#scoreTotal').text(correctTotal + "/" + questionTotal);
            $('.primarysection').hide();
            $('.results').show();
            $('.intro').hide();
        } else {
            //continue to next question
            questionNum++;
            questionDisplay();
        }

    });

    $('#tryAgain').click(function () {
        $('.primarysection').hide();
        $('.results').hide();
        $('.intro').show();
        /* Hide current question, open next? */
        /* nextQuestion(); */
    });

    /* Display Questions function */


    function questionDisplay() {
        $('#questionNum').text("Question " + (questionNum + 1) + " of " + questionTotal);
        $('#javaquestion').text(questions[questionNum].question);
        $('.multiplechoicebox').empty();
        var choiceTotal = questions[questionNum].choices.length;
        for (var i = 0; i < choiceTotal; i++) {
            $('.multiplechoicebox').append('<input type="radio" name="option" class="option" value=' + i + '>' + ' ' + questions[questionNum].choices[i] + ' <br>');
        }
    }

    /* Results  >< */

    /* var scoreCheck = function () {
         if (correctTotal == 5) {
             $('correctTotal').text('Perfect score!');
         } else {
             $('correctTotal').text('A little off! You got' + ' ' + correctTotal + ' ' + 'questions'); */


});
