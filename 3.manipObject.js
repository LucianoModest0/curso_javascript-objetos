// exibir a lista de telefones em um objeto

const client = {
  name: "André",
  age: 36,
  cpf: "82432560086",
  mail: "andre@email.com",
  phones: ["77778888", "88887777"],
};

// usando foreach para acessar a lista

client.phones.forEach((phone) => console.log(phone));

// add um objeto dentro de um objeto (no exemplo, add depententes)

client.dependents = {
  name: "Sara",
  kinship: "filha",
  birth: "22/03/2015",
};

console.log(client);

// alternando uma propriedade de objeto que está dentro de um objeto

client.dependents.name = "Sara Silva";

console.log(client);
