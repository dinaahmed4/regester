

// start form section 

function validate() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPass = document.getElementById("confirmPass").value;
    var message = document.getElementById("error");

    message.style.color = '#fff';
    message.style.textAlign = "center";
    message.style.backgroundColor = "red";
    message.style.padding = "10px";
    message.style.transition = "all 1s ease";
    message.style.marginBottom = "10px";

    if (name == "" && email == "" && password == "" && confirmPass == "") {
        message.innerHTML = "Please Enter Data";
        return false;

    } else if (name.length < 5 || name.length > 15) {
        message.innerHTML = "Please Enter 5-15 Character In User Name";
        return false;
    } else if (email.indexOf("@") == "-1") {
        message.innerHTML = "Please Enter Valid E-mail";
        return false;
    } else if (password.length <= 8) {
        message.innerHTML = "Please Enter Atleast 8 Character";
        return false;
    } else if (password != confirmPass) {
        message.innerHTML = "Please Matched Password ";
        return false;
    } else {
        return true;
    }
}


// End form section 