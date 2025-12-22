// git add . 
// git commit -m "first commit"
//  git push -u origin main

//Ex 1: Swap two numbers without using a third variable.
// let a=10
// let b=20
// console.log("Before Swap: "+a+" and "+b)
// a=a+b
// b=a-b
// a=a-b
// console.log("After Swap: "+a+" and "+b)

//Ex 2: Calculate the simple interest (SI = P × R × T / 100).
// let p=10 ,r=4,t=8
// console.log("Value of P =>"+p)
// console.log("Value of Q =>"+r)
// console.log("Value of T =>"+t)
// console.log("Simple Interest => "+(p*r*t)/100)

//Ex 3: Convert temperature from Celsius to Fahrenheit.
// let celsius=47
// let fahrenheit=(celsius*9/5)+32
// console.log("Celsius =>"+celsius)
// console.log ("Fahrenheit =>"+fahrenheit)

// //Ex4: Check if a number is positive, negative, or zero.
// let num=0
// console.log("Given no is "+num)
// if (num>0){
//   console.log(num+" is positive")
// }
// else if(num<0){
//   console.log(num+" is Negative")
// }
// else {
//   console.log(num+" is Zero")
// }

//Ex 5:Check if a character is a vowel or consonant.

// let char='E'
// if(char=='a'||char=='A'||char=='e'||char=='E'||char=='i'||char=='I'||char=='o'||char=='O'||char=='u'||char=='U'){
//   console.log(char+" is Vowel")
// }
// else if (!isNaN(char)) {
//   console.log("Invalid input");
// }
// else{
//   console.log(char+" is Consonant")
// }

// Ex 6: Grade system: Assign grades based on marks.
// let marks=499
// if(marks>550){
//   console.log("Grade A")
// }
// else if(marks>500){
//   console.log("Grade B")
// }
// else if(marks>450){
//   console.log("Grade C")
// }
// else if(marks>400){
//   console.log("Grade D")
// }
// else if(marks>350){
//   console.log("Grade E")
// }
// else{
//   console.log("No Grade")
// }

//Ex 7:Print Fibonacci sequence up to n terms.

// let n = 5;
// let a = 0, b = 1;
// console.log("Fibonacci Series:");
// console.log(a);
// for (let i = 1; i < n; i++) {
//   console.log(b);
//   let c= a + b;
//   a = b;
//   b = c;
// }

//Ex 8:Sum of digits of a number using a loop.

// let num=55,dup=num,sum=0
// while(num!=0){
//   sum+=num%10
//   num=Math.floor(num/10)
// }
// console.log("Sum of digits of "+dup+" is "+sum)

//Ex 9: Find the reverse of a given number.

// let num=837,temp=num,rev=0,digit
// while(num!=0){
//   digit=num%10
//   rev=rev*10+digit
//   num=Math.floor(num/10)
// }
// console.log("Given number => "+temp+"\n"+"Reversed number => "+rev)

//Ex 10:Function to calculate the power of a number.

// let base_num=4,power_num=2
// console.log(base_num+" ^ "+power_num+" = "+Math.pow(base_num,power_num))

//Ex 11: Function to check whether a number is prime.

// function checkprime(no){
//   if(no<=1)
//     return false;
//   for(let i=2;i<no;i++){
//     if(no%i==0){
//       return false;
//     }
//   }return true;
// }
// let no=11
// if(checkprime(no)){
//   console.log(no+" is prime number")
// }else{
//   console.log(no+" is not a prime number")
// }

//Ex 12:Function to calculate the sum of array elements.

// function sumofarray(arr){
//   let sum=0
//   for(let i=0;i<arr.length;i++){
//     sum+=arr[i]
//   }
//   return sum
// }

// let arr=new Array(3,2,6,7,2)
// console.log("Sum of array is "+sumofarray(arr))

//Ex 13: Find duplicate elements in an array.
