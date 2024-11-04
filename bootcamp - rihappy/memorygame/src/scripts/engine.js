// 1. Definição das variáveis e emojis
const emojis = [
  "🐵",
  "🐵",
  "🐶",
  "🐶",
  "🐺",
  "🐺",
  "🐱",
  "🐱",
  "🦁",
  "🦁",
  "🐯",
  "🐯",
  "🦝",
  "🦝",
  "🐷",
  "🐷",
];

// 2. Variáveis de controle
let openCards = []; // Armazena as cartas abertas
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 1 : -1)); // Embaralha os emojis

// 3. Criação das caixas de cartas
for (let i = 0; i < shuffleEmojis.length; i++) {
  let box = document.createElement("div"); // Cria um novo elemento div
  box.className = "item"; // Define a classe para a caixa
  box.innerHTML = shuffleEmojis[i]; // Define o emoji da caixa
  box.onclick = handleClick; // Adiciona o evento de clique
  document.querySelector(".game").appendChild(box); // Adiciona a caixa ao jogo
}

// 4. Função para lidar com o clique nas cartas
function handleClick() {
  // Verifica se a caixa já está combinada ou já está aberta
  if (openCards.length < 2 && !this.classList.contains("boxMatch")) {
    this.classList.add("boxOpen"); // Adiciona classe de caixa aberta
    openCards.push(this); // Adiciona a caixa à lista de cartas abertas
  }
  // Verifica se duas cartas estão abertas
  if (openCards.length === 2) {
    setTimeout(checkMatch, 500); // Espera um tempo antes de verificar a combinação
  }
}

// 5. Função para verificar se as cartas abertas são iguais
function checkMatch() {
  // Compara os conteúdos das duas cartas abertas
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add("boxMatch"); // Marca como combinada
    openCards[1].classList.add("boxMatch");
  } else {
    openCards[0].classList.remove("boxOpen"); // Remove classe de aberta
    openCards[1].classList.remove("boxOpen");
  }
  openCards = []; // Limpa a lista de cartas abertas

  // Verifica se todas as cartas foram combinadas
  if (document.querySelectorAll(".boxMatch").length === emojis.length) {
    alert("Você venceu!"); // Mensagem de vitória
  }
}
