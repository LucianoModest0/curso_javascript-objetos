// dados em uma array, permitem informações com listas do mesmo tipo

const cpfList = ["82432560086", "53605421016", "01001535006"];

// o objeto permite diferentes tipos de informações
const client = {
  name: "André",
  age: 36,
  cpf: "82432560086",
  mail: "andre@email.com",
};

//acessando objetos com informações de um cliente e printar a info

console.log(`O nome do cliente é ${client.name} e tem ${client.age} anos.`);

// usando o substring para mostrar apenas parte da string, no caso os 3 primeiros dígitos

console.log(client.cpf.substring(0, 3));

// acessando a lista utilizando uma variável

const keys = ["name", "age", "cpf", "mail"];

console.log(client[keys[0]]);

keys.forEach((data) => {
  console.log(client[data]);
});
