function multipleSum(num){
    var sum=0;
   for(var i=1;i<num;i++)
   {
       if(i%3===0 || i%5===0)
       {
           sum=sum+i;
       }
   }
   return(sum); //  Enter your logic here
}
module.exports = multipleSum;
