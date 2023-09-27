// var arr = [ 'Saad' ,true,12,30.4]

// var abc = arr.slice(1)
// document.write(abc)

// arr.splice(2,2, '24')
// arr.shift()

// arr.splice(2,1,18)



// arr.push('Hamza', 'Rehman')

// var arr = ['Saad', 'Ali', 'shaheer']

// var a = prompt('first value')
// var b = prompt('sec value')

// arr.unshift('a')
// arr.push('b')

// document.write (a,b)

// var a = prompt ();
// var b = prompt ();

// // for (var = i + )
// document.write(2 + ' x ' + 1 + ' = ' + a*b)



// arr.splice(0,4, 'Makki','Raza')
// document.write(arr)

// var abc = arr.slice(0)


// // Prompt 1: Get the number for which multiplication table is needed
// const numberInput = prompt("Enter a number for which you want to see the multiplication table:");

// // Convert the input to a number
// const number = parseInt(numberInput);

// // Check if the input is a valid number
// if (isNaN(number)) {
//   alert("Invalid input. Please enter a valid number.");
// } else {
//   // Prompt 2: Get the limit for the multiplication table
//   const limitInput = prompt(`Enter the limit for the multiplication table of ${number}:`);
  
//   // Convert the limit input to a number
//   const limit = parseInt(limitInput);
  
//   // Check if the limit input is a valid number
//   if (isNaN(limit)) {
//     alert("Invalid input. Please enter a valid number for the limit.");
//   } else {
//     // Print the multiplication table
//     console.log(`Multiplication table of ${number} up to ${limit}:`);
//     for (let i = 1; i <= limit; i++) {
//       const result = number * i;
//       console.log(`${number} x ${i} = ${result}`);
//     }
//   }
// }

// for( i=1; i<=100; i=i+10){
// for(j=i; j<=i+10; j++){

//     document.write(j," ")
// }

// document.write("<br>")
// }


var date = new Date()
var getmili = date.getTime()

var dob = new Date('12 sep, 1999')
var getmilidob = dob.getTime()

var minus = getmili - getmilidob
var formula = minus / (1000 * 60 * 60 * 24 * 365)

console.log(formula)

