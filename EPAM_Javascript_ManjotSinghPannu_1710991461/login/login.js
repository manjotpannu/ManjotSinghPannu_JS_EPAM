var attempt = 3;

function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "Manjot" && password == "12345"){
        alert ("Login successfully");
        return false;
    }
    else{
        attempt --;
        alert("Invalid Login, You have left "+attempt+" attempt;");

        if( attempt == 0){
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}
