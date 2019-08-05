function formValidation()
{
    var uid = document.registration.userid;
    var passid = document.registration.passid;
    var uname = document.registration.username;
    var uadd = document.registration.address;
    var ucountry = document.registration.country;
    var uzip = document.registration.zip;
    var uemail = document.registration.email;
    var umgen = document.registration.mgen;
    var ufgen = document.registration.fgen; 
    
    var letters = /^[A-Za-z]+$/;
    
    
    if(uid.value.length < 5 && uid.value.length > 11) 
        {
            window.alert("Length of username was not correct"); 
            uid.focus(); 
            return false; 
        }
    
    if(uid.length == "")
        {
            window.alert("Length of username was not correct"); 
            uid.focus(); 
            return false;
        }
    
    if (passid.value.length == 0 ||passid.value.length >= 12 || passid.value.length < 7)
        {
            alert("Password should not be empty / length be between 7 and 12");
            passid.focus();
            return false;
        }
    
    if(uname.value.match(letters))
        {
        return true;
        }
            else
            {
            alert('Username must have alphabet characters only');
            uname.focus();
            return false;
            }
    
    if(uadd.value == "")
        {
            window.alert("Length of username was not correct"); 
            uadd.focus(); 
            return false;
        }
    
    
    
    
}
