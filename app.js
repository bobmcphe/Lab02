'use strict';

var firstName = prompt('Please enter your name:');
console.log('The user put in ' + firstName);

var firstQ = prompt('Hi, ' + firstName + '. Is this the first time for you to visit my website?');
if(firstQ.toUpperCase() === 'YES'){
  alert('Welcome! You will learn more about me in this website.');
} else{
  alert('Welcome back!');
}
console.log('The user put in ' + firstQ);


var secondQ = prompt('Are you also a student in codefellow?');
if(secondQ.toUpperCase() === 'YES'){
  alert('Hello fellow cohorts!');
} else{
  alert('Oh. Well Codefellow is an institution that I will be spending most of my time talking about in this website.');
}
console.log('The user put in ' + secondQ);


var thirdQ = prompt('Are you also based in Seattle?');
if(thirdQ.toUpperCase() === 'YES'){
  alert('Seattle is amazing!');
} else{
  var forthQ = prompt('Oh. Well where are you from then?');
  alert('Oh, '+forthQ+ '! That is far!');
  console.log('The user put in ' + forthQ);
}
console.log('The user put in ' + thirdQ);

var fifthQ = prompt('Will you be interested to learn more about me?');
if(fifthQ.toUpperCase() === 'YES'){
  alert('I promise I will not be boring!');
} else{
  alert('Oh. Well I do not think you have much choice >:)');
}
console.log('The user put in ' + fifthQ);

var sixthQ = prompt('Do you have any other questions before we get started?');
if(sixthQ.toUpperCase() === 'YES'){
  alert('Hang on to it, ' + firstName + '! You might get the answer on my page!');
} else{
  alert('I am sure you will be interested very soon, ' + firstName + '!');
}
console.log('The user put in ' + sixthQ);
