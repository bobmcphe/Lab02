'use strict';

function q1() {
  var firstName = prompt('Please enter your name:');
  console.log('The user put in ' + firstName);

  var firstQ = prompt('Hi, ' + firstName + '. Is this the first time for you to visit my website?');
  if(firstQ.toUpperCase() === 'YES'){
      alert('Welcome! You will learn more about me in this website.');
    } else{
      alert('Welcome back!');
    }
    console.log('The user put in ' + firstQ);
}

q1();

function q2() {
var secondQ = prompt('Are you also a student in codefellow?');
if(secondQ.toUpperCase() === 'YES'){
    alert('Hello fellow cohorts!');
  } else{
    alert('Oh. Well Codefellow is an institution that I will be spending most of my time talking about in this website.');
  }
  console.log('The user put in ' + secondQ);
}

q2();

function q3() {

var thirdQ = prompt('Are you also based in Seattle?');
if(thirdQ.toUpperCase() === 'YES'){
    alert('Seattle is amazing!');
  } else{
    var forthQ = prompt('Oh. Well where are you from then?');
    alert('Oh, '+forthQ+ '! That is far!');
    console.log('The user put in ' + forthQ);
  }
  console.log('The user put in ' + thirdQ);
}

q3();

function q4() {
var fifthQ = prompt('Will you be interested to learn more about me?');
if(fifthQ.toUpperCase() === 'YES'){
    alert('I promise I will not be boring!');
  } else{
    alert('Oh. Well I do not think you have much choice >:)');
  }
  console.log('The user put in ' + fifthQ);
}

q4();

function q5() {

var sixthQ = prompt('Do you have any other questions before we get started?');
if(sixthQ.toUpperCase() === 'YES'){
    alert('Hang on to it, ' + firstName + '! You might get the answer on my page!');
  } else{
    alert('I am sure you will be interested very soon, ' + firstName + '!');
  }
  console.log('The user put in ' + sixthQ);

alert('But let me quiz you for a bit. I didn\'t want to but I have no choice ¯\_(ツ)_/¯') 

}

q5();

/* sixth question */


function q6() {
  var i = 0;
  var answer = 5;

  for (i; i < 4; i++) {
    var seventhQ = prompt('How many years old is my puppy?');
    var num7Q = Number(seventhQ)
    console.log('The user entered ' + seventhQ);
    
    if (num7Q == answer){
      alert('Correct!');
      break;
    } 
      else if (num7Q > answer){
      alert('Nope, too old. try again.');
    
    }
      else if (num7Q < answer){
      alert ('Nope, too young. try again.');
  }}

  alert('He is 5 years old!')
}

q6();


/* seventh question*/

function q7() {

  var answers = ['indonesia', 'singapore', 'seattle', 'egypt','los angeles','las vegas','malaysia'];
  var flag = false;
  var numberOfGuesses = 0;

  while ( flag === false && numberOfGuesses < 6) {
    var questions = prompt('Where have I visited?');

    for (var i = 0; i < answers.length ; i++){
      if (questions.toLowerCase() == answers[i]){
        alert('You are right!');
        flag = true;
        break;
      } 
    }
      if (flag ==false){
        alert('Incorrect');
        numberOfGuesses++;
      }
  }
  alert('I have visited: ' + answers[0] +', '+ answers[1] +', '+ answers[2] +', '+ answers[3] +', '+ answers[4] +', '+ answers[5] +', '+ answers[6] + '!')
  alert('You made ' +  (numberOfGuesses + 1) + ' guesses out of 6 guesses!')
}

q7();