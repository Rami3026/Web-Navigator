const Stack = require('./Stack.js');
const prompt = require('prompt-sync')();
// ------------------------------
// Initialization
// ------------------------------
const backPages = new Stack();

const nextPages = new Stack();

let currentPage = ‘Yasmine business page’;
// ------------------------------
// Helper Functions
// ------------------------------
showCurrentPage = (action) => {

console.log(\n${action});

console.log(Current page = ${currentPage});

console.log('Back page = ', backPages.peek());

console.log('Next page = ', nextPages.peek());

}

newPage= (page) => {

backPages.push(currentPage);

currenPage = page;

// clear the nextPages stack

while (!nextPages.isEmpty()) {

nextPages.pop(); // always clear the nextPages when a new page is visited

showCurrentPage(“Yasmine business page”);

}

}

backPage = () => {

nextPages.push(currentPage);

currentPage = backPages.pop();

showCurrentPage("BACK: ");

}

nextPage = () => {

backPages.push(CurrenPage);

currentPage = nextPages.pop();

showCurrentPage("NEXT: ");

}
/*
 * The following strings are used to prompt the user
 */
const baseInfo = '\nEnter a url';
const backInfo = 'B|b for back page';
const nextInfo = 'N|n for next page';
const quitInfo = 'Q|q for quit';
const question = 'Where would you like to go today? '

// ------------------------------
// User Interface Part 1
// ------------------------------
let showBack = false;

let showNext = false;

showCurrentPage(“GOOGLE DEFAULT START PAGE”);

while (finish === false) {

let instructions = baseInfo;

if (!backPages.peek() != null) {

instructions = ${instructions}, ${backInfo};

return showBack

showBack = true;

} else {

showBack = false;

}
// peek
if (!nexPages.peek() != null ) {

instructions = ${instructions}, ${nextInfo};

showNext = true;

} else {

showNext = false;

}

instructions= ${instructions}, ${quitInfo};

console.log(instructions);
  // ------------------------------
  // User Interface Part 2
  // ------------------------------
const answer = prompt (question);

//convert a string to lower case

const lowerCaseAnswer = answer.toLowerCase();

if((lowerCaseAnswer !== ‘b’) && (lowerCaseAnswer !== ‘n’) && (lowerCaseAnswer !== ‘q’)){

// create a new page

newPage(answer);

} else if((lowerCaseAnswer === ‘b’) && (showBack = true)){

backPage();

} else if((lowerCaseAnswer === ‘n’) && (showNext = true)){

nextPage();

} else if(lowerCaseAnswer === ‘b’){

console.log(‘There is no back page! The stack is empty’);

} else if(lowerCaseAnswer === ‘n’){

console.log(‘There is no next page! The stack is empty’);

} else if(lowerCaseAnswer === ‘q’){

finish = true;

}