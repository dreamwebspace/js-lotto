var numbers = [0];
while (numbers.length<6)
  
{
  
  
  var a = (Math.ceil(Math.random() * 5));
  

  
  
  
  if (a != numbers[0]) {
    numbers.push(a);
  }
  
    
  console.log(numbers);
}





numbers.shift();
  console.log(numbers);

