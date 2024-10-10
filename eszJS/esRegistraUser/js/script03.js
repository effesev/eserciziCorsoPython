
let user = {
    username: "",
    email: "",
    password: "",

    info: function(){
        return "Nome utente: " + this.username + "<br> Email: " + this.email + "<br> Password: " + this.password;
    }

}

let btnStampa = document.getElementById("btnStampa");
let demo = document.getElementById("demo");

function registraUser(){

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(username != "" && email != "" && password != ""){
        user.username = username;
        user.email = email;
        user.password = password;

        demo.innerHTML = user.info();

        console.log(user);
        
    }else{
        demo.innerHTML = "<div> Si prega di compilare tutti i campi!</div>";
    }

}

btnStampa.addEventListener("click", registraUser);