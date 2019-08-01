$(document).ready(function(){
$("#lgbtn").click(function(){
    var un = $("#un").val();
    var pw = $("#pw").val();
    validateLogin(un,pw);
});

function validateLogin(un,pw)
{
    var regexUn = /^[a-zA-Z ]{1,32}$/;
    var regexPw = /^[a-zA-Z0-9]{1,32}$/;
    if( (un.length!=0 && regexUn.test(un)) && (pw.length!=0 && regexPw.test(pw)) && (un =="admin" && pw == 12345) )
    {
        lg((res)=>{
             
            });
    }
    else
    {   if(un.length == 0 || pw.length == 0)
        alert("Username and Password cannot be empty");
        if((!regexUn.test(un)) || (!regexPw.test(pw)) )
        alert("Please enter Username and Password in the correct format")
        if(!(un =="admin" && pw == 12345))
        alert("Invalid Login Credentials");
    }
}

function lg(callback){ 
    window.location.href = "./main.html";
     callback();
 }

});