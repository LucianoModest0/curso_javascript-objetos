// o uso da classe inclui os parametros e métodos para construção de um cliente(no ex)

class Client {
  constructor(name, mail, cpf, balance) {
    this.name = name;
    this.mail = mail;
    this.cpf = cpf;
    this.balance = balance;
  }

  deposit(value) {
    this.balance += value;
  }

  showBalance() {
    console.log(this.balance);
  }
}

// criando um novo cliente

const luciano = new Client("luciano", "luciano@email.com", "11122233344", 1000);

// chamando um método da classe

luciano.showBalance();

// exibindo informações do cliente

console.log(luciano);
