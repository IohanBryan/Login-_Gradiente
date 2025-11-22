let tentativas = 0;

function logar() {
  const login = document.getElementById("login").value.trim();
  const senha = document.getElementById("senha").value.trim();

  if (login === "" || senha === "") {
    alert("Preencha todos os campos.");
    return;
  }

  if (tentativas >= 3) {
    alert("Muitas tentativas. Aguarde e tente novamente em alguns segundos.");
    return;
  }

  if (login === "admin" && senha === "admin") {
    alert("Sucesso!");
    window.location.href = "index.html";
  } else {
    tentativas++;
    alert("Usuário ou senha inválidos.");
  }
}

const modal = document.getElementById("modal-direitos");
const abrir = document.getElementById("abrir-direitos");
const fechar = document.querySelector(".fechar");

abrir.onclick = function (e) {
  e.preventDefault(); 
  modal.style.display = "flex"; 
}

fechar.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}