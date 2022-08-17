// add um novo depentente, tranforma o objeto dependentes em uma array com [], agora dependents é uma array de objetos

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
  ],
};

// assim, pode-se usar os métodos para array como push para add um novo objeto dentro da array

client.dependents.push({
  name: "Samia Maria",
  kinship: "filha",
  birth: "04/01/2001",
});

console.log(client);

// usando o filter para encontrar um dado dentro das arrays

const youngerDaughter = client.dependents.filter(
  (dependent) => dependent.birth === "22/03/2015"
);

//trazendo o objeto inteiro, com todos os dados
console.log(youngerDaughter);

// trazendo um índice da array para buscar apenas o nome da filha mais nova
console.log(youngerDaughter[0].name);
