//Arithmatic operators 
let a = 5;
let b = 2;
console.log("a=",a, "&b=",b);
console.log("a + b=", a + b);
console.log("a - b=", a - b);
console.log("a * b=", a * b);
console.log("a / b=", a / b);

//Modulud --> %
console.log("a % b=", a % b);

//Exponentiation--> ** (a^b)
console.log("a ** b=", a ** b);

//Unary Operator >> increment ++ >> Decrement --
 a++;
 console.log("a= ", a);  // 

 a--;
 console.log("a= ", a);

 // Assignment Operators 
 a += 4; // a= a+4
 console.log("a = ", a); //9  

 a -= 4; // a= a-4
 console.log("a= ", a); //1

 a *= 4; // a= a*4
 console.log("a= ", a); //20

 a %= 4; // a= a%4
 console.log("a= ", a); // 1

 a **= 4; // a= a**4
 console.log("a= ", a); // 625

 //Comparison Operators

 console.log("5==2", a == b); //True or false

 console.log("5!=2", a!= b); // True

 console.log("5===2", a === b); //True value 

 console.log("5!==2", a !== b); // True & false

 console.log("5>2", a > b); // true

 console.log("5<2", a < b); //False

 console.log("5>=2", a >= b); // True

 console.log("5<=2", a <= b); // False

 // Logical Operator 

 // AND : 1.True  2.True = True  

 let cond1 = a > b; //True 
 let cond2 = a===5; // False
console.log("cond1 && cond2 =", cond1 && cond2);

// OR : 1.True 2. False = True 
 
console.log("cond1 || cond2 =", cond1 || cond2);

// NOT : 1. True 2.False = False 

console.log("!(2<5) =", !(a<b)); // False 


// Conditional Statements 
// If Statement 

let age=25;
if(age>18) {
    console.log("You can Vote");
}

if(age<18) {
    console.log("You can't Vote");
}

// IF-else Statement 

// let mode = "light";
// let color;

//if (mode === "dark") {
  //  color = "black";
//} else {
  //  color = "white";
//}
//console.log(color);

//else-if statement 

let mode = "dark";
let color;
if (mode === "dark") {
    color = "black";
} else if (mode== "blue" ) {
    color = "blue";
} else if ( mode =="pink") {
    color = "pink";   
} else {
    color = "white"; 
}
console.log(color);

// Ternary Operator 

let sum = 16;

sum >= 18 ? "adult" : "not adult"; // simpler, compact if-else 

//more practice and theory : MDN Doc website 