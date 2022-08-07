function times(number){
    var rem;
    var sum=0;
    var count=1;
    if(number>=10)
    {
    while(number>=1)
    {
        rem=number%10;
        sum=sum+rem;
        number=parseInt(number/10);
        }
    while(sum>10)
    {
        var temp=sum;
        var sum1=0;
        while(temp>=1){
        rem=temp%10;
        sum1+=rem;
        temp=parseInt(temp/10);
        }
        count=count+1;
        sum=sum1;
        

        }
    }
    else{
        count=0;
    }
        return(count);//  Enter your logic here
}

module.exports = times;
