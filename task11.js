function prime(number){
   var i=1;
   var j=0;
   var k=0;
   var count=0;

   for(i=2;i<number;i++)
   {
       var l=true;
       for(k=2;k<i;k++)
       {
           if(i%k===0)
           {
               l=false;
           }
       }
       if(l===true)
       {
           count=count+1;
       }
    }
   
   return(count); // Enter your logic here
}
module.exports = prime;
