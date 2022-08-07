function digitSum (number){
    var ram;
    var sum=0;
    while(number>=1)
    {
        ram=number%10;
        number=parseInt(number/10);
        if(ram%2===0)
        {
            sum=sum+ram;
        }
    }
    return(sum);
    
    //  enter your logic here
}
module.exports = digitSum;
