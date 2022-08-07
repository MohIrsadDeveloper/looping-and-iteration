function solveCube(number){
    var i=1;
    var result;
    var sum=0;
    while(i<=number)
    {
        result=(i*i*i);
        sum=sum+result;
        i=i+1;
    }
    return(sum);
    
    // Enter your logic here
}
module.exports = solveCube;
