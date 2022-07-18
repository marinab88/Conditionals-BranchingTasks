/************   if else     *********/ 
// Task 1
// if (a string with zero)
// Will alert be shown?

if ("0") {
  alert( 'Hello' );
} // yes


// Task 2
// The name of JavaScript

let name = prompt('What is the “official” name of JavaScript?', '');

if (name == 'ECMAScript') {
  alert( 'Right!' );
} else {
  alert( 'You don\'t know? ECMAScript' ); 
}


// Task 3
// Show the sign

let number = prompt('Write a number', '0');

if (number > 0) {
  alert(1);
} else if (number < 0) {
  alert(-1);
} else {
  alert(0);
}


// Task 4
// Rewrite 'if' into '?'

// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

let result = (a + b < 4) ? 'Below' : 'Over';


// Task 5
// Rewrite 'if..else' into '?'

// let message;
// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

let message =
  (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' : '';


/****************************************/
/*      while - for       */
//         Task 1
// Last loop value

let i = 3;

while (i) {
  alert( i-- );
} // 1

//         Task 2
// Which values does the while loop show?

let i1 = 0;
while (++i1 < 5) alert( i1 );  // 1 2 3 4

while (i1++ < 5) alert( i1 );  // 1 2 3 4 5


//         Task 3
// Which values get shown by the "for" loop?

for (let i = 0; i < 5; i++) alert( i );
// 0 1 2 3 4

for (let i = 0; i < 5; ++i) alert( i );
// 0 1 2 3 4


//          Task 4
// Output even numbers in the loop (from 2 to 10)

for (let i=2; i <= 10; i += 2) {
  alert(i);
}


//           Task 5
// Replace "for" with "while"

// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }

let i2 = 0;
while (i2 < 3) {
  alert( `number ${i2}!` );
  i2++;
}


//          Task 6
// Repeat until the input is correct

let value;
do {
  value = prompt('Enter a number greater than 100', 0);
} while (value <= 100 && value);


//           Task 7 
// Output prime numbers
const primeNr = (n) => {

  nextPrime :
    for(let i=2; i <= n; i++) {
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          continue nextPrime;
        } 
        
      }
      alert( i );
    }
}
primeNr(20);
