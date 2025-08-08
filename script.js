// Slideshow automático
const imagens = [
  "img/slide1.jpg",
  "img/slide2.jpg",
  "img/slide3.jpg",
  "img/slide4.jpg"
];
let index = 0;

function trocarImagem() {
  document.getElementById("slide").src = imagens[index];
  index = (index + 1) % imagens.length;
}
setInterval(trocarImagem, 3000);

// Modal da galeria
function abrirModal(src) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("img-modal").src = src;
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

// Validação do formulário
document.getElementById("form-contato").addEventListener("submit", function (e) {
  e.preventDefault();
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!nome || !email.includes("@") || !mensagem) {
    alert("Preencha todos os campos corretamente.");
    return;
  }

  alert("Mensagem enviada com sucesso!");
  this.reset();
});
