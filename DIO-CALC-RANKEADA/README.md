# Calculador de Nível de Herói
Este repositório contém uma função em JavaScript chamada calcularNivel que determina o nível de um herói com base no número de vitórias e derrotas que ele possui. A função calcula o saldo de vitórias e atribui um nível de habilidade ao herói, dependendo de quantas vitórias ele alcançou.

## Descrição da Função
A função calcularNivel recebe dois parâmetros:

vitorias: O número total de vitórias do jogador.
derrotas: O número total de derrotas do jogador.
A função calcula o saldo de vitórias (a diferença entre vitórias e derrotas) e, com base nesse valor, determina um nível de habilidade que é retornado em formato de string.

## Níveis de Habilidade
A função define os seguintes níveis com base nas vitórias:

Ferro: Menos de 10 vitórias.
Bronze: Entre 11 e 20 vitórias.
Prata: Entre 21 e 50 vitórias.
Ouro: Entre 51 e 80 vitórias.
Diamante: Entre 81 e 90 vitórias.
Lendário: Entre 91 e 100 vitórias.
Imortal: Mais de 100 vitórias.
## Como Funciona
Entrada: A função recebe dois parâmetros, vitorias e derrotas, ambos números inteiros.
Processamento: A função calcula o saldo de vitórias do jogador subtraindo o número de derrotas das vitórias.
Saída: A função retorna uma string formatada, informando o saldo de vitórias e o nível do herói.
