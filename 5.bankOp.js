// utilizando uma funcao dentro do objeto

const client = {
  name: "André",
  age: 36,
  cpf: "82432560086",
  mail: "andre@email.com",
  phones: ["77778888", "88887777"],
  dependents: [
    {
      name: "Sara Silva",
      kinship: "filha",
      birth: "22/03/2015",
    },
    {
      name: "Samia Maria",
      kinship: "filha",
      birth: "04/01/2001",
    },
  ],

  saldo: 100,
  depositar: function (value) {
    this.saldo += value;
  },
};

// verificar o saldo do cliente
console.log(client.saldo);

// depositando e verificando o saldo após depósito
client.depositar(30);

console.log(client.saldo);

// percorrendo dentro de um objeto e puxando um relatório usando o for

let report = "";

for (let info in client) {
  if (typeof client[info] === "object" || typeof client[info] === "function") {
    continue;
  } else {
    report += `
    ${info}  ==>  ${client[info]}
    `;
  }
}

console.log(report);
