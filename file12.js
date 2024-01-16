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
