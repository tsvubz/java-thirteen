let num1;
let num2;

function addNum(num1, num2) {
  if (num1 === 20 || num2 === 20 || num1 + num2 <= 20) {
    console.log('True');
  }else {
    console.log('False');
  }
}

addNum(20, 5);
addNum(40, 15);
addNum(9, 12);
addNum(8, 9);
addNum(14, 20);