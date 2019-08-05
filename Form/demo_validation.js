function nameValidate(textBox)
{
    var message = document.getElementById('nameValidate');
    var message1 = document.getElementById('fnameValidate');
    
    var fullName = document.getElementById('fullName').value;
    var fathName = document.getElementById('fathName').value;
    
    var userMessage , fathMessage;
    
    

    try { 
            if(textBox == 0)  throw "empty";
            textBox = textBox.trim();
            let len = textBox.length;
            if(len < 5)  throw "too low";
            if(len > 10)   throw "too high";
        }                              
           
    catch(err) {
                    if(fullName === textBox)
                            {
                                userMessage = "Input is " + err;
                                message.innerHTML = userMessage;
                                
                            }
        
                        if(fathName === textBox)
                                {
                                    fathMessage = "Input is " + err;
                                     message1.innerHTML = fathMessage;
                                   
                                }

                }
 
    
   
}


function numberValidate (info)
{
    var message = document.getElementById('contactValidate');
    var message1 = document.getElementById('zipValidate');
    var message2 = document.getElementById('meterValidate');
    
    
    var contNumber = document.getElementById('contact').value;
    var zipCode = document.getElementById('zipCode').value;
    var meterNum = document.getElementById('meterNumber').value;
    
    
    if(info === contNumber)
        {
            var phoneno = /^\d{10}$/;
            
            try{
        
                    if (isNaN(info)) throw "not a number";

                    if(info.match(phoneno))
                    {
                        message.innerHTML = "correct";
                    }  
                    else
                    {
                        throw "Invalid Number";
                    }
            
            }
        
            catch(err)
                {
                    message.innerHTML = "This is " + err;

                }

        }
    
    else if(info === zipCode)
        {
            var numbers = /^\d{6}$/;
    
                try 
                    {
                        if (isNaN(info)) throw "not a number";

                        if(info.match(numbers))
                            {
                                message1.innerHTML = "correct";
                            }

                        else
                                {
                                    throw "Invalid ZIP Code";
                                }
                    }


                catch(err)
                    {
                        message1.innerHTML = "This is " + err;

                    }
        
        }
    
    
    else if(info === meterNum)
        {
            var numbers = /^\d{12}$/;
    
                try 
                    {
                        if (isNaN(info)) throw "not a number";

                        if(info.match(numbers))
                            {
                                message2.innerHTML = "correct";
                            }

                        else
                                {
                                    throw "Invalid Meter Number";
                                }
                    }


                catch(err)
                    {
                        message2.innerHTML = "This is " + err;

                    }
        
        }
    
    
}







                


                                    