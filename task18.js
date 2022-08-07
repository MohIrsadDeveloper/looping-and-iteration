function gcd(num1, num2){
    if(num2!=0)
    {
        return(gcd(num2,num1%num2));
        }
        else
        {
            return (num1);
        }
        //  ENter your logic here
}

module.exports = gcd;
