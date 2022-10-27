var email = 'pavan';
var pass = 'pavan';


function logIn() {

    if (document.getElementById("email").value === email && document.getElementById("password").value === pass) {
        window.open("./dashBoard.html", "_self")

    } else {
        alert('Plese Cheack Username and Password!')
    }

}