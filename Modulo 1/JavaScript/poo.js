class User{
  #firstName;

  constructor(firstName, lastName){
    this.#firstName = firstName;
    this.lastName = lastName;
  }

  getFirstName(){
    return this.#firstName;
  }

  getFullName(){
    return this.#firstName + " " + this.lastName;
  }
}

class Pessoa1 extends User{
  #idade;

  constructor(firstName, lastName, idade){
    super(firstName, lastName);
    this.#idade = idade;
  }

  toString(){
    return `
      Nome completo: ${this.getFullName()}
      Idade: ${this.#idade}
    `
  }
}

const user = new Pessoa1("Guilherme", "Rocha Leite", 26);
user.getFullName();
console.log("Dados do cara:")
console.log(user.toString());