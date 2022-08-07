function findMax(number){
    var sum=0;
    var i=1;
    while(sum<number)
    {
        sum=sum+i;
        i=i+1;
    }
    return(i-2);

// Enter your logic here
}
module.exports = findMax;
