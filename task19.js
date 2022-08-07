function series(number){
    if(number===1)
    return(Math.pow(1,1));
    else{
        return((Math.pow(number,number))+series(number-1));
    }
    //  Enter your logic here
}
console.log(series(3));

module.exports = series;
