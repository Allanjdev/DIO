// Função para calcular o nível de um herói com base no número de vitórias e derrotas
function calcularNivel(vitorias, derrotas) {
  // Calcula o saldo de vitórias, subtraindo as derrotas do número de vitórias
  const saldoVitorias = vitorias - derrotas;

  // Variável para armazenar o nível do jogador
  let nivel;

  // Condicional para determinar o nível com base no número de vitórias
  if (vitorias < 10) {
    // Menos de 10 vitórias: Nível Ferro
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    // Entre 11 e 20 vitórias: Nível Bronze
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    // Entre 21 e 50 vitórias: Nível Prata
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    // Entre 51 e 80 vitórias: Nível Ouro
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    // Entre 81 e 90 vitórias: Nível Diamante
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    // Entre 91 e 100 vitórias: Nível Lendário
    nivel = "Lendário";
  } else if (vitorias >= 101) {
    // Mais de 100 vitórias: Nível Imortal
    nivel = "Imortal";
  }

  // Retorna uma string formatada com o saldo de vitórias e o nível do jogador
  return `O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`;
}
