function multiple(number){
    var i=1;
    var result;
    var sum=0;
    while(i<=number)
    {
        var j=1;
        while(j<=10)
        {
            result=i*j;
            sum=sum+result;
            j=j+1;
        }
        i=i+1;
    }
    return(sum);
        // Enter your logic here
}
module.exports = multiple;
