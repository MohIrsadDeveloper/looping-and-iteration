function div(numerator, denominator){
    var result=numerator;
    if(denominator===1)
    {
        result=numerator;
    }
    else
    {
    while(numerator>=1)
    {
        if(numerator%denominator===0)
        {
            numerator=parseInt(numerator/denominator);
        }
        else{
            break;
        }
        
        }
        result=numerator;//  Enter your logic here
    }
    return(result);
}
module.exports = div;
