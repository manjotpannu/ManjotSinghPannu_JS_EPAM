function validatefname()
{
    var name=document.getElementById("lb1").value;
    var rel=/^[a-zA-Z\s\'\-]{2,15}$/;

    if(rel.test(name))
    {
        document.getElementById("msg1").style.color = "green";
        document.getElementById("msg1").innerHTML="Valid";
        return true;
    }
    else
    {
        document.getElementById("msg1").style.color ="Red";
        document.getElementById("msg1").innerHTML="Invalid";
        return false;
    }

}

function validatelname()
{
    var name=document.getElementById("lb3").value;
    var rel=/^[a-zA-Z\s\'\-]{2,15}$/;

    if(rel.test(name))
    {
        document.getElementById("msg").style.color = "green";
        document.getElementById("msg").innerHTML="Valid";
        return true;
    }
    else
    {
        document.getElementById("msg").style.color ="Red";
        document.getElementById("msg").innerHTML="Invalid";
        return false;
    }

}

function validateemailid()
{
    var mail = document.getElementById("lb5").value;
    var rel = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(rel.test(mail))
    {
        document.getElementById("msg2").style.color = "green";
        document.getElementById("msg2").innerHTML ="Valid";
        return true;
    }
    else
    {
        document.getElementById("msg2").style.color = "Red";
        document.getElementById("msg2").innerHTML = "Invalid";
        return false;
    }
}

function validatenumber()
{
    var number = document.getElementById("lb6").value;
    var rel =/^[0-9]{10}$/

    if(rel.test(number))
    {
        document.getElementById("msg3").style.color = "green";
        document.getElementById("msg3").innerHTML ="Valid";
        return true;
    }
    else
    {
        document.getElementById("msg3").style.color = "Red";
        document.getElementById("msg3").innerHTML = "Invalid";
        document.getElementById("lb6").value="Invalid";
        return false;
    }
}

function login() {
    window.location.assign("../login/login.html");
}
