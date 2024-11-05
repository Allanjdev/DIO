// Solicita ao usuário o nome do herói através de um prompt e armazena a resposta na variável 'nomeHeroi'
let nomeHeroi = prompt("Digite o nickname: ");

// Exibe um alerta com a mensagem de boas-vindas, incorporando o nome do herói inserido
console.log = alert(`Bem vindo ${nomeHeroi}`);

// Solicita ao usuário a quantidade de experiência do herói e armazena o valor na variável 'expHeroi'
let expHeroi = prompt("Digite quanto de exp você tem: ");

// O valor de expHeroi é comparado com diferentes faixas de experiência para determinar o nível do herói

// Se a experiência for exatamente 1000, o herói é classificado como "nível ferro"
if (expHeroi === 1000) {
  console.log = alert(`Você é um herói de nível ferro`);
}
// Se a experiência for maior que 1001 e menor ou igual a 2000, o herói é classificado como "nível bronze"
else if (expHeroi > 1001 && expHeroi <= 2000) {
  console.log = alert(`Você é um herói de nível bronze`);
}
// Se a experiência for maior que 2001 e menor ou igual a 5000, o herói é classificado como "nível prata"
else if (expHeroi > 2001 && expHeroi <= 5000) {
  console.log = alert(`Você é um herói de nível Prata`);
}
// Se a experiência for maior que 5001 e menor ou igual a 7000, o herói é classificado como "nível ouro"
else if (expHeroi > 5001 && expHeroi <= 7000) {
  console.log = alert(`Você é um herói de nível Ouro`);
}
// Se a experiência for maior que 7001 e menor ou igual a 8000, o herói é classificado como "nível platina"
else if (expHeroi > 7001 && expHeroi <= 8000) {
  console.log = alert(`Você é um herói de nível Platina`);
}
// Se a experiência for maior que 8001 e menor ou igual a 9000, o herói é classificado como "nível ascendente"
else if (expHeroi > 8001 && expHeroi <= 9000) {
  console.log = alert(`Você é um herói de nível Ascendente`);
}
// Se a experiência for maior que 9001 e menor ou igual a 10000, o herói é classificado como "nível imortal"
else if (expHeroi > 9001 && expHeroi <= 10000) {
  console.log = alert(`Você é um herói de nível Imortal`);
}
// Se a experiência for maior ou igual a 10001, o herói é classificado como "nível radiante"
else if (expHeroi >= 10001) {
  console.log = alert(`Você é um herói de nível Radiante`);
}

// Ao final, exibe um alerta com o nome e nível de experiência do herói
console.log(alert(`O Herói de nome ${nomeHeroi} está no nível de ${expHeroi}`));
