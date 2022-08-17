// herdando uma classe

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

// utilizando a class cliente para criar o cliente de conta poupança onde o extends herda a classe cliente e o super traz os parametros da classe cliente, nota-se que no construtor temos o saldo da conta poupança

class SavingsClient extends Client {
  constructor(name, mail, cpf, balance, savingsBalance) {
    super(name, mail, cpf, balance);
    this.savingsBalance = savingsBalance;
  }
  depositSavings(value) {
    this.savingsBalance += value;
  }
  showSavings() {
    console.log(this.savingsBalance);
  }
}

//criando um novo cliente de conta poupança

const andre = new SavingsClient(
  "Andre",
  "andre@mail.com",
  "22233344455",
  100,
  50
);

// exibindo os dados do cliente

console.log(andre);

// depositando na poupança usando o método criado na class savingsclient

andre.depositSavings(35);

// mostrando o saldo da poupança após deposito

andre.showSavings();
