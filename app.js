var usuario = "teste@teste.com";
var password = "12345678";

function check_login() {
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

  if (usuario === email && password === senha) {
    window.location.href = "loged.html";
  } else {
    alert("Email ou senha incorretos");
    document.getElementById("forget").style.display = "flex";
  }
}
