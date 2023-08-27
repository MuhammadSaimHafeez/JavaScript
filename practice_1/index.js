
console.log("Hello world");

console.log("My name is saim");




// mathematical calculation

let number=515;
let number1 =5;
console.log( number+number1 )

let a=26;
let b=2;

let add=a+b;
let sub=a-b+add;
let mul=a*b;
let div=a/b;
let mod=a%b;
console.log(add,sub,mul,div)

//float

let floatN=26.02;
let floatn2=2.343;

let addf=floatN+floatn2;
let subf=floatN-floatn2+addf;
let mulf=floatN*floatn2;
let divf=floatN/floatn2;
let modf=floatN%floatn2;
console.log(addf,subf,mulf,divf)


//add num in string:
let num=10;
let string1='Hello';

let addnumnstring=num+11 + " " +string1 +15+ 18; // for space: +" "+
let addnumnstring1=num+11 + "\t" +string1 +15+ 18; // for space: +" "+

console.log(addnumnstring);//21 hello1518 it not add numbers while adding in the string but two numbers in start 
//will be added couz its start with two numbers but in string it concatinate

let name= "Saim";
let age=21
let state=`My name is ${name} and i am ${age} years old`;//``````cross ticks  //template literals use to add content in string
let state1=`${num+11 } ${string1 +15+ 18}`; // for space: +" "+

console.log(state1)
