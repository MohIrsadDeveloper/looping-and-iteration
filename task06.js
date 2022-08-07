function round(number){
    var mod=number%10;
    var result;
    if(mod!==0)
    {
    result=number+(10-mod);
    }
    else{
        result=number;
    }
    return(result);//  Enter your logic here
}
module.exports = round;
