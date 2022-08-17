// add campos dentro de um objeto

const client = {
  name: "André",
  age: 36,
  cpf: "82432560086",
  mail: "andre@email.com",
};

console.log(client);

// criando um novo campo, número de telefone

client.phone = "99998888";

console.log(client);

// substituição do número de telefone

client.phone = "88889999";

console.log(client);
