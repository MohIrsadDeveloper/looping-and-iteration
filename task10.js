function sumSeries(number){
    var sum=0;
    var i=1;
    while(i<=number)
    {
        sum=sum+(1/i);
        i+=1;
        }
        sum=sum.toFixed(2);
        return(sum);//  Enter yoru  logic here
}

module.exports = sumSeries;
