var numbers = [0];
var a;
var b;
var c;

while (numbers.length < 6)

{
  var a = (Math.ceil(Math.random() *3));

  if (a != numbers[numbers.length]) {
    numbers.push(a);
  }

  console.log(numbers);
}


numbers.shift();
console.log("Results:");
console.log(numbers);
