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

// object keys navega pelas chaves do objeto referido

const propsClients = Object.keys(client);

console.log(propsClients);

// criar uma função para verificar se o cliente tem depententes para oferecer seguro

function insuranceOffer(obj) {
  const propsClients = Object.keys(obj);
  if (propsClients.includes("dependents")) {
    console.log(`Oferta de seguro de vida para os dependentes de ${obj.name}`);
  }
}

insuranceOffer(client);

// navegar entre os valores do objeto (object.values)

console.log(Object.values(client));

// já Object.entries cria uma array para cada key + value

console.log(Object.entries(client));
