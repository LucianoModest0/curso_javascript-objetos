// a partir de um modelo criar diversos clientes com as mesmas propriedades com um protótipo

function Client(name, cpf, mail, balance) {
  (this.name = name),
    (this.cpf = cpf),
    (this.mail = mail),
    (this.balance = balance);
  this.deposit = function (value) {
    this.balance += value;
  };
}

const andre = new Client("André", "12345678988", "andre@email.com", 100);

console.log(andre);
