module.exports = class Turn {

    constructor(){
    
        this.RemainingTurns=6;
    }
          
    getRemainingTurns()
    {
        return  this.RemainingTurns;
    }
    
    resetTurns()
    {
        this.RemainingTurns = 6; 
    }
    
    CompleteTurn()
    {
        this.RemainingTurns--; 
    }
    
    HasTurns()  //turns status
    {
    if(this.RemainingTurns>0)
    {
        return true;
    }
    else
    {
    return false;
    }
    }

    CorrectRow(x)
    {
        if(x==1 && this.RemainingTurns==6 )
        {
            return true;
        }
        else if (x==2 && this.RemainingTurns==5 )
        {
             return true ;
        }
        else if (x==3 && this.RemainingTurns==4 )
        {
             return true ;
        }
        else if (x==4 && this.RemainingTurns==3 )
        {
             return true ;
        }
        else if (x==5 && this.RemainingTurns==2 )
        {
             return true ;
        }
        else if (x==6 && this.RemainingTurns==1)
        {
             return true ;
        }
        else 
        {
             return false;
        }

    }
    
    }
 

