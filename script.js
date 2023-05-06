let pw1 = "";
function firstPassword(event) {
    pw1 = event.target.value;
}

function matchPassword(event) {  
    var pw2 = event.target.value;
    if(pw1 == pw2)  
    {  
        console.log("Passwords matched!");
        document.getElementById("match-error").innerText = "";   
    } else {
        console.log("Passwords should match");
        document.getElementById("match-error").innerText = "Passwords should match";
    }
  }  