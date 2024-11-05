// Definindo uma classe chamada Heroi
class Heroi {
  // O construtor da classe recebe três parâmetros: nome, idade e tipo do herói
  constructor(nome, idade, tipo) {
    this.nome = nome;  // Atribui o nome do herói à propriedade 'nome'
    this.idade = idade;  // Atribui a idade do herói à propriedade 'idade'
    this.tipo = tipo;  // Atribui o tipo do herói (mago, guerreiro, etc.) à propriedade 'tipo'
  }

  // Método 'atacar' que define o ataque do herói de acordo com o seu tipo
  atacar() {
    let ataque;  // Variável que vai armazenar o tipo de ataque

    // O 'switch' verifica o tipo do herói e define o ataque correspondente
    switch (this.tipo) {
      case "mago":
        ataque = "magia";  // Se o herói for um mago, o ataque será magia
        break;
      case "guerreiro":
        ataque = "espada";  // Se o herói for um guerreiro, o ataque será espada
        break;
      case "monge":
        ataque = "artes marciais";  // Se o herói for um monge, o ataque será artes marciais
        break;
      case "ninja":
        ataque = "shuriken";  // Se o herói for um ninja, o ataque será shuriken
        break;
      default:
        ataque = "ataque";  // Se o tipo não corresponder a nenhum caso acima, o ataque será genérico
    }

    // Exibe no console uma mensagem indicando o ataque do herói
    console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
  }
}

// Criando instâncias (objetos) da classe Heroi
const mago = new Heroi("Gandalf", 2000, "mago");  // Um mago chamado Gandalf com 2000 anos
const guerreiro = new Heroi("Conan", 30, "guerreiro");  // Um guerreiro chamado Conan com 30 anos

// Chamando o método 'atacar' de cada herói para ver a ação deles
mago.atacar();  // Saída no console: O mago Gandalf atacou usando magia
guerreiro.atacar();  // Saída no console: O guerreiro Conan atacou usando espada
