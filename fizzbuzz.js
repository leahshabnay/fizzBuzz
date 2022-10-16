console.log("welcome to FizzBuzz\n----------------------------------");

function obviousSolution(n)
{
    console.log("obviousSolution:\n --------   ");
    for (i = 1 ; i < n+1 ; i++)
    {
        var dividedBy3=(i % 3 == 0);
        var dividedBy5=(i % 5 == 0);

        if (dividedBy3 && dividedBy5)
        process.stdout.write("fizzbuzz")
        else if (dividedBy3)
        process.stdout.write("fizz")
        else if(dividedBy5)
        process.stdout.write("buzz")
        else
        process.stdout.write(i.toString())

        process.stdout.write(" ");
    }
    
}

function twoIfsSolution(n){

    console.log("\ntwoIfsSolution:\n --------   ");

   var dic={
    3:"fizz",
    5:"buzz"
   } 

for (i = 1 ; i < n+1 ; i++)
    {
        var s="";
        for (var key in dic){
            if (i%key==0)
            s=s+dic[key];
           
        }
        if (s=="")
        s=s+i.toString();

        process.stdout.write(s + " ");
    }

}

obviousSolution(15);
twoIfsSolution(15);
