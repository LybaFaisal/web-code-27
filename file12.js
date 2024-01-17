//functions

// function test(marks){
//     document.write(`<br> Marks of Student= ${marks}`)
// }

//logic to find prime numbers

document.write("Prime Numbers from 1 to 10 are=" + "<br>" + "<br>");
for(let i=2 ; i<10 ; i++)
{
    
    for(var j=2 ; j<i ; j++)   
    {
        if(i%j==0)
        {
            break;
        }
    }
    if(i==j)
    {
        document.write(i + "<br>")
    }
}
//i=2 ; i<10 ; (2<10) True  outer loop
//j=2 ; j<i ; (2<2)  False inner loop
//outer if(i==j) => (2==2) True =>(prints 2)

//i++ , i==3, 3<10 True outer
//j=2 , j<i, (2<3) True inner
//if(i%j==0) , (3%2==0) false !break
//j++ , j==3 , 3<3 , false
//outer if(i==j) (3=3) true =>(prints 3)

//i++ , i==4 ,4<10, true outer
//j=2, j<i , 2<4 true.
//check if(i%j==0) , (4%2==0), true break..
//outer if(i==j) ; (4==2) false 

//i++, i=5, 5<10, true
//j=2 , 2<5 , true 
//if(i%j==0), 5%2==0 false !break
//j++ , j=3 ,3<5 , true , 3%5==0 false !break
//j++, j=4, 4<5, true, 4%5==0 , false, !break
//j++, j=5,5<5 , false
//outer if(i==j), 5==5 True =>(prints 5)

//i++ , i=6, 6<10, true
//j=2, j<i , 2<6 , true
//if(i%j==0), 6%2==0 true, break..
//outer if(i==j), (6==2) false

//i++ , i=7 , 7<10 , true
//j=2 , 2<7 true, 7%2==0 false, !break
//j++, j==3 same , j++ ,j++,....j=7
//7<7 false, outer if(7==7) => (Prints 7)

//i++ i=8, 8<10 true.
//j=2, 2<8 True, 8%2==0 true break..
//outer if(8=2), false

//i++, i==9, 9<10, true
//j=2 , 2<9, true, if 9%2==0 false !break
//j++ j==3, 3<9 true, 9%3==0 true break.
//9==3 False

//dry run
// 2 3 5 7 

//Example 1

function Student(name)
{
    console.log(`Names of Student= ${name}`)
}
Student("Lyba");

//Example 2
//arrow function

let Std= (marks) =>
{
    console.log(`Marks of Student= ${marks}`);
}
Std(1061);

//Example 3
//Function to Check Even/Odd

function EvenOdd(num)
{
    if(num%2==0)
    {
        console.log("Even Numbers");
    }
    else{
        console.log("Odd Numbers");
    }
}
//calling:

EvenOdd(6);
EvenOdd(7);
EvenOdd(9);
EvenOdd(17);

//Function to check prime numbers from 1 to 10

function Prime()
{
for(let i=2 ; i<10 ; i++)
{
    let j;
    for(j=2 ; j<i ; j++)   
    {
        if(i%j==0)
        {
            break;
        }
    }
    if(i==j)
    {
        console.log(i)
    }
}
}
Prime();
console.log("Finished");

//OR

function Check_Prime(number)
{
for(let i=2 ; i<number ; i++)
{
    let j;
    for(j=2 ; j<i ; j++)   
    {
        if(i%j==0)
        {
            break;
        }
    }
    if(i==j)
    {
        console.log(i)
    }
}
}
Check_Prime(15);

//Return Function

let x=3;
let y=7;

let add =(a,b)=>{
    return a+b;
}

let sum = add(x,y);

console.log(sum);

//return function example 2

let k= 2;
let l= 2;

function Sub(a, b){
    return a-b;
}
let result = Sub(k,l);
console.log(result);

//Example 3
//function to find Sq.


let sq=20;
function square(s)
{
    return s*s;
}
let Sq_Result= square(sq);
console.log(Sq_Result);

//Example 4
//function to find multiply

let a1= 30;
let a2= 2;
function multiply(m,n)
{
    return m*n;
}
let mult_result= multiply(a1,  a2);
console.log(mult_result);

//Example 5
//function for division

let num1= 40;
let num2= 2;

let division= (b1,b2)=>{
    return b1/b2;
}
let div_res= division(num1, num2);
console.log(div_res);

//Example 6

let addition= (n1,n2)=>
{
    console.log(`Addition result= ${n1+n2}`);
}
addition(2,3);
addition(6,8);
addition(76,9);
addition(2,9);

//Example 7

let subtrac= (s1,s2)=>
{
    console.log(`Subtraction result=   ${s1-s2}`);
}
subtrac(8,9);
subtrac(7,2);
subtrac(6,1);

//Example 8

let Multiply= (m1,m2)=>
{
    console.log(`Product= ${m1*m2}`);
}
Multiply(4,4);
Multiply(20,10);
Multiply(30,0);
Multiply(1,2);

//Example 9

let div= (d1,d2)=>
{
    console.log(`Division= ${d1/d2}`);
}
div(20,10);
div(50,5);
div(1,0); //infinity
div(0,1); //zero