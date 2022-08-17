const clients = [
  {
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
  },
  {
    name: "Juliana",
    age: 32,
    cpf: "53605421016",
    mail: "Juliana@email.com",
    phones: ["77778888", "88887777"],
    dependents: [
      {
        name: "Sophia",
        kinship: "filha",
        birth: "12/05/2011",
      },
    ],
  },
];

// o operador de espalhamento é utilizado com os ... trazendo os objetos dentro da chave dependents e trasnformando em uma única lista

const dependentsList = [...clients[0].dependents, ...clients[1].dependents];

console.log(dependentsList);

// uma forma de exibição seria o .table

console.table(dependentsList);
