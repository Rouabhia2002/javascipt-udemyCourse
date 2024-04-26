//first challenge

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;


let BMIMark = massMark / (heightMark* heightMark);

let BMIJohn = massJohn /(heightJohn ** 2);

let markHigherBMI = (BMIMark > BMIJohn );

console.log(BMIMark, BMIJohn, markHigherBMI );



//seconf challenge

if (BMIMark > BMIJohn)
{console.log("Mark's BMI is higher than John's!")}
else
console.log("John's BMI is higher than Mark's!");

if (BMIMark > BMIJohn)
{console.log(`Mark's BMI ( ${BMIMark})  is higher than John's (${BMIJohn})!`)}
else console.log(`John's BMI (${BMIJohn} )is higher than Mark's (${BMIMark})!` );


//3rd one
/* Write your code below. Good luck! 🙂 */

const scoreDolphins  = (96 + 108 + 89)/3;
const scoreKoalas  = (88 + 91 + 110)/3

const maxD = scoreDolphins > 100;
const maxK = scoreKoalas > 100;

if (scoreDolphins > scoreKoalas && maxD) {
    console.log("Dolphins win the trophy");
}
else if (scoreDolphins < scoreKoalas && maxK ) {
    console.log("Koalas  win the trophy")
    
}
else  {
    console.log("both wins")
    
};

//4th challenge
const bill = 275;

/* Write your code below. Good luck! 🙂 */

const tip = (bill >= 50 && bill <= 300)? 0.15*bill+ bill : 0.2*bill+ bill ;

console.log(`the bill was ${bill}, the tip was ${tip} and the total value ${bill+tip}   `);
