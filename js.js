var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
var won = [];
var a;
var b;
var i=0;
for (i;i<5;i++) {
  
  a = (Math.ceil(Math.random() *6));
//  a=8;
    console.log("wylosowana liczba");
    console.log(a);
  
  b = numbers[a-1];
//  console.log("pozycja");
 // console.log(b);
  if (b!=null) {
    
  won.push(b);
  delete numbers[b];
  }
  
}
//  console.log("dlugosc puli");
//  console.log(numbers.length);
//  console.log("dlugosc wygranych");
//  console.log(won.length);

  console.log("numbers");
  console.log(numbers);
  console.log("won");
  console.log(won);
  
  
  
  
