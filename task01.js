function getMultiple (number) {
    var mul=1;
    var result;
    var sum=0;
    while(mul<=10)
    {
        result=number*mul;
        sum=sum+result;
        mul+=1;
    }
    return(sum);
// Enter your logic here
}

module.exports = getMultiple
