function prime(number){
    var i=number+1;
    while(i>number)
    {
        var j=0;
        var k=0;
        for(j=2;j<i;j++)
        {
            if(i%j===0)
            {
                k=1;
            }
        }
        if(k===1)
        {
            i=i+1;
        }
        else{
            return(i);
        }


        }//  Enter your logic here
}
module.exports = prime
