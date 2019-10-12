var numbers = [1,2,3,4,5];
var won = [];
var a;
var b;
var c;
var i=0;

console.log(numbers);
for (i;i<4;i++) 


{
  c = numbers.length;
  a = (Math.floor(Math.random() *c));
    console.log("a: "+a);
  b = numbers[a-1];
//  console.log("pozycja");
//  console.log(b);
//  
    
  won.push(b);
  numbers.splice(b,1);
  console.log(numbers);
  
  console.log(won);

  
  
}
//  console.log("dlugosc puli");
//  console.log(numbers.length);
//  console.log("dlugosc wygranych");
//  console.log(won.length);
//
//  console.log("numbers");
//  console.log(numbers);
//  console.log("won");
//  console.log(won);
//  
  
  
  
