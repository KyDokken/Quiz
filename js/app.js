$(document).ready(function () {
            var questions = [
    //Question 1
                {
                    question: 'What is the biggest prize pool in the history of Esports?',
                    choices: ['45thousand', '7 million', '33million', '480thousand', '18million'],
                    correct: 0,
                    correctDetails: 'The International 2015 18 million dollars! '
    },

    //Question 2
                {
                    question: '',
                    choices: ['Around 1500', 'Around 2500', 'Around 3500'],
                    correct: 2,
                    correctDetails: 'There are more than 3500 Car Manufacturers worldwide.'
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
                    correct: 0,
                    correctDetails: 'The Grave Digger has 1500-2000 bhp.'
    },

    //Question 5
                {
                    question: 'What countries have won the largest total prize pools?',
                    choices: ['UK', 'China', 'USA', 'Sweden', 'Korea'],
                    correct: 1,
                    correctDetails: 'China has just edged the USA at a massive 33,275,584 in prize pool earnings.'
    }

    ];

            /* variables */

            var questionNum = 0;
            var questionTotal = questions.length;
            var correctTotal = 0;


            /* On quiz start */

            $('.primarysection').hide();
            $('.results').hide();

            function questionDisplay() {
                $('#questionNum').text("Question " + (questionNum + 1) + " of " + questionTotal);
                $('#javaquestion').text(questions[questionNum].question);
                $('.multiplechoicebox').empty();
                var choiceTotal = question[questionNum].choices.length;
                for (var i = 0; i < choiceTotal; i++) {
                    $('#choices').append('<input type="radio" name="option" class="option" value="0"><span class="answer">' + questions[questionNum].choices[i] + '</span>');

                }

            }


            /*
            $('.startQuizButton').on('click', '.option', function () {
                var answer = $("input(class'option']:checked").val();
                */
        }
