function NthTerm (number){
    if(number===0)
    {
        return(0);
    }
   else if(number===1){
    return(1);
   }
    else
    {
        return(NthTerm(number-2)+NthTerm(number-1));
    }

    
    
    //  Enter yoru logic here
}

module.exports = NthTerm;
