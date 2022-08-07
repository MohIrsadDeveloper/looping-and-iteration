function armstong (number) {
    var count=0;
    var temp=number;
    var k=number;
    var sum=0;
    while(temp>=1)
    {
        count=count+1;
        temp=parseInt(temp/10);
    }
    while(k>=1)
    {
        var rem=k%10;
        var pow=Math.pow(rem,count);
        sum=sum+pow;
        k=parseInt(k/10);

    }
    if(sum===number)
    {
        return(true);
    }
    else{
        return(false);
    }

    //  Enter yoru logic here
}

module.exports = armstong;
