// Retorna os caracteres de uma string em um intervalo
const nome = "Clube Atlético Mineiro";
console.log(nome.slice(0, 10));

const arr1 = [1,2,3,4,5];
console.log(arr1.join(" - "));

// Retira o primeiro elemento
const retirado = arr1.shift();
console.log("Elemento retirado: "+retirado);
console.log("Array modificado:");
console.log(arr1);

console.log("Posição do número 3: "+arr1.indexOf(3));

arr1.push(7);
// Remove o último elemento do array
arr1.pop();
console.log("Array modificado:");
console.log(arr1);

console.log("USANDO O SPLICE");
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
// Remove TRÊS elementos na posição DOIS do array
arr2.splice(2, 3);
console.log(arr2);

// Troca DOIS valores por outros na posição UM
const nomes = ["Maria", "João", "Lucas", "Pedro"];
nomes.splice(1, 2, "Luiz", "Ronaldo");
console.log(nomes);


console.log("USANDO O SLICE");
const pessoas = ["Eduardo", "Joana", "Wallace", "Rosana"];

// Seleciona os valores entre as posições UM e TRÊS, SEM alterar o array original
console.log(pessoas.slice(1, 3));

console.log("CONCATENANDO ARRAYS");
const gerente = ["Dani", "Manuela"];
console.log(pessoas.concat(gerente));

console.log("USANDO FILTER");
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = numeros.filter(item => item % 2 == 0);
console.log("Número pares do array:");
console.log(pares);


console.log("USANDO MAP");
const funcionarios = [
  {
    nome: "Guilherme",
    idade: 26
  },

  {
    nome: "Ramon",
    idade: 32
  },

  {
    nome: "Gabriel",
    idade: 33
  }
]
// Elemento (obrigatoŕio), índice, array
const nomesFuncionarios = funcionarios.map((funcionario) => {
  return funcionario.nome;
})

console.log(nomesFuncionarios);

console.log("USANDO REDUCE");
// Reduz todos os valores a somente um
const total = numeros.reduce((total, numero) => {
  return total + numero;
}, 0); // valor inicial

console.log(total);


function teste(...args){
  return args;
}

console.log(teste(1, 2, 3, 4, 5))