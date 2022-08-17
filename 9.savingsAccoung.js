// manipulando protótipos, criar o tipo de conta poupança que utiliza o prototipo de cliente e add uma nova propriedade no objeto (saldo da poupança)

function Client(name, cpf, mail, balance) {
  (this.name = name),
    (this.cpf = cpf),
    (this.mail = mail),
    (this.balance = balance);
  this.deposit = function (value) {
    this.balance += value;
  };
}

// usando o .call para chamar as propriedades de cliente para o cliente da poupança (savingClient) e add o saldo da poupança

function SavingClient(name, cpf, mail, balance, savingBalance) {
  Client.call(this, name, cpf, mail, balance);
  this.savingBalance = savingBalance;
}

const juliana = new SavingClient(
  "Juliana",
  "11122233344",
  "ju@email.com",
  100,
  300
);

console.log(juliana);

// add ao prototipo do objeto poupança um novo método, que deposita valores na poupança

SavingClient.prototype.SavingDeposit = function (value) {
  this.savingBalance += value;
};

juliana.SavingDeposit(30);

console.log(juliana.savingBalance);
