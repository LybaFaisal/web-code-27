//functions

// function test(marks){
//     document.write(`<br> Marks of Student= ${marks}`)
// }

//logic to find prime numbers

document.write("Prime Numbers from 1 to 10 are=" + "<br>" + "<br>");
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
        document.write(i + "<br>")
    }
}
//firstly check the outer loop i=2, i<10 then enters the inner loop , then check j<i (2<2)
//not true, lets check the next condition, i===j (2===2), yes true (prints 2).
//then again check the 1st loop there is an i++ (now i == 3). i<10(3<10) yes true,
//then j<i (2<3) yes true check the if condition( !break) , loop#2 continiues, j++ (j==3)
// j<i (3<3) not true, check the outer if(i===j) (3==3) yes true..
//then comes the outer loop there is an i++, (now i==4)!
