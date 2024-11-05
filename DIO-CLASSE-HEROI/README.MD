# Heroi Class em JavaScript
Este repositório contém um exemplo simples de como criar e usar uma classe Heroi em JavaScript. A classe Heroi permite criar objetos representando diferentes tipos de heróis, como magos, guerreiros, monges e ninjas. Cada herói tem atributos como nome, idade e tipo e um método para realizar um ataque baseado no seu tipo.

## Descrição do Código
O código define uma classe chamada Heroi com as seguintes características:

### Atributos:
nome: O nome do herói.
idade: A idade do herói.
tipo: O tipo de herói, que pode ser "mago", "guerreiro", "monge", "ninja" ou outro tipo genérico.

## Método:
atacar(): Este método determina o tipo de ataque que o herói usa com base no seu tipo. O ataque pode ser "magia", "espada", "artes marciais", "shuriken" ou um ataque genérico, dependendo do tipo do herói.

## Fluxo do Método atacar():
O método usa uma estrutura de controle switch para verificar o tipo do herói e atribuir o ataque apropriado.
Em seguida, ele exibe uma mensagem no console informando qual ataque foi realizado.

## Explicação do Código:
Classe Heroi: A classe é definida com um construtor que inicializa as propriedades do herói: nome, idade e tipo.
Método atacar: O método usa um switch para determinar qual tipo de ataque será feito com base no tipo do herói. Depois, imprime uma mensagem no console indicando qual ataque foi realizado.
Instâncias: Criamos duas instâncias da classe Heroi, uma representando um mago e outra um guerreiro, e chamamos o método atacar() para cada um.

### Instalação e Execução
Requisitos: Este código foi escrito em JavaScript, portanto, você precisará de um ambiente que execute JavaScript, como um navegador ou Node.js.
Como executar: Você pode simplesmente copiar e colar o código em um arquivo .js e executá-lo em um console do navegador ou usando o Node.js.
