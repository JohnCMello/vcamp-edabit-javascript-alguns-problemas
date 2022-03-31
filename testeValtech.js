// Nível Médio =================================================================


//------------------------------------------------------------------------------



// How Much is True?

/**
 * Percorro todo o array com o método filter e retorno o comprimento do array 
 * final que contem os elementos que passam no teste de implementação da 
 * função passada por parâmetro.
*/

function countTrue(arr) {
  return arr.filter(bool => bool).length
}

//------------------------------------------------------------------------------



// Tile Teamwork Tactics

/**
 * Implementação com ternário:
 * Verifico se 'a' é maior que 'b' (se eu estou na frente não posso alcançar)
 * ou
 * se 'a' e 'b' são iguais (ja avançaria de qualquer forma)
 * ou
 * se 'b' menos 'a' é maior que 6 (o dado so tem 6 lados neste contexto e não
 * consequiria alcançar na rodada atual)
*/

function possibleBonus(a, b) {
  return (a > b) || (a == b) || (b - a > 6) ? false : true
}

/**
 * Implementação com operador lógico &&:
 * 
 * O operador lógico && retorna a expressão avaliada na esquerda se ela 
 * puder ser convertida para false. 
 * 
 * 'a' é menor que 'b' ?
 * se sim verifico o outro lado da expressão:
 * 'b' menos 'a' é menor ou igual a 6 eu posso alcançar ou ultrapassar
 * se não retorno a expressão da esquerda 
 */

function possibleBonus(a, b) {
  return a < b && b - a <= 6
}

//------------------------------------------------------------------------------



// Right Shift by Division

/**
 * Recriar a implementação do operador Right Shift (>>)
 * 
 * "The right shift operation is similar to floor division of 'x' by 2^'y'" 
 * Citação contida na descrição do problema.
 */

function shiftToRight(x, y) {
  return Math.floor(x / 2 ** y)
}

//------------------------------------------------------------------------------



// Perimeters with a Catch

/**
 * Implementação alternativa do operador ternário utilizando operadores lógicos.
 *  
 * A função 'perimeter' recebe dois parametros (l<String> e num<Number>)
 * 
 * 'l' representa a forma geométrica ('s' para quadrado e 'c' para círculo) 
 * 'num' representa o comprimento dos lados do quadrado OU o raio do círculo.
 * 
 * Caso o valor de 'l' seja 's' retorno 4*num, 
 * caso contrário retorno 6.28*num
 */

function perimeter(l, num) {
  return l === 's' && 4 * num || 6.28 * num
}

//------------------------------------------------------------------------------



// Find Number of Digits in Number

/**
 * o logaritimo de base 10 pode ser compreendido também como:
 * 10 elevado a qual # potencia é igual a X
 * 10^# = X
 * 
 * De acordo com as minhas observações, um logaritimo de base 10 tem como 
 * resultado um valor irracional n-1 onde n é o número de dígitos da perte
 * inteira do resultado.
 * 
 * Após obter este resultado, transformo ele em um número inteiro com o método 
 * floor do objeto Math e adiciono 1 para obter a quantidade de dígitos do 
 * argumento passado para a função.
 */

function num_of_digits(num) {
  return num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num)) + 1)
}

//------------------------------------------------------------------------------



// Burglary Series (04): Add its Name

/**
 * A função addName recebe como parametros obj<Object>, name<String> e value<Number>
 * e retorna um novo objeto contendo tudo o que existe dentro de obj e adiciona 
 * dinamicamente a nova uma propriedade 'name' com o valor 'value'.
 * 
 * Com o spread operator eu consigo copiar todo o conteudo recebido em obj e 
 * adiciono a nova propriedade dinamicamente utilizando bracket notation.
 */

function addName(obj, name, value) {
  return {
    ...obj,
    [name]: value,
  }
}

//------------------------------------------------------------------------------



// Which Generation Are You?

/**
 * A função generation recebe dois parametros x<Number> e y<String>.
 * 
 * onde: 
 * x pode ser números de -3 até 3. (-3, -2, -1, 0, 1, 2, 3)
 * y pode ser uma string que define o genero do parente. ('f', 'm')
 *  
 * Crio um objeto 'gen' onde cada propriedade recebe um array com as duas possibilidades
 * de parentesco para cada grau/nivel da arvore genealógica que é atribuido a x.
 * 
 * Caso o gênero passado como argumento para função seja 'm' retorno o valor da 
 * primeira posição do array de acordo com o grau de parentesco (y),
 * caso contrario, retorno o valor da segunda posição do array.
 */

function generation(x, y) {
  const gen = {
    "-3": ["great grandfather", "great grandmother"],
    "-2": ["grandfather", "grandmother"],
    "-1": ["father", "mother"],
    "0": ["me!", "me!"],
    "1": ["son", "daughter"],
    "2": ["grandson", "granddaughter"],
    "3": ["great grandson", "great granddaughter"]
  }
  return y === "m" ? gen[x][0] : gen[x][1];
}

//------------------------------------------------------------------------------


// Nível Difícil================================================================



// Seven Boom!

/**
 * A função sevenBoom recebe como parametro um array.
 * 
 * Caso exista um numero 7, retorno 'Boom!'.
 * Caso contrário retorno 'there is no 7 in the array'.
 * 
 * Faço um join, passando como argumento uma string vazia, no array passado 
 * como argumento para sevenBoom, depois percorro a string retornada e tento
 * dar um match, com o metodo homônimo e retona o próprio 7 caso encontre ou null.
 * 
 * Poderia ter feito a solução com o metodo de strings includes, que retorna um
 * boolean caso a condição seja satisfeita.
 */

function sevenBoom(arr) {
  //const  arrayToString = arr.join('').includes('7');
  const arrayToString = arr.join('').match('7');
  return arrayToString ? 'Boom!' : 'there is no 7 in the array'
}

//------------------------------------------------------------------------------



// Tower of Hanoi 

/**
 * O algoritimo para determinar a quantidade minima para resolver o jogo 
 * "Torre de Hanoi" da-se pela seguinte expressão (2^n - 1).
 * 
 * Onde n é o numero de discos utilizados no jogo.
 */

function towerHanoi(discs) {
  return 2 ** discs - 1
}

//------------------------------------------------------------------------------



// Number of Boomerangs

/**
 * A função countBoomerangs recebe um array de números e retorna a quantidade de 
 * "boomerangs" possiveis encontrados no array.
 * 
 * Um "boomerang" pode ser entendido como sub array de 3 posições onde a 
 * primera e ultima posições tem o mesmo valor e a posição do meio é diferente.  
 * 
 * Caso as três posiçoes tenham o mesmo valor, não consideramos um boomerang
 * 
 * Crio uma variavel count que vai controlar a quantidade de boomerangs 
 * encontrados no array passado como argumento para countBoomerangs.
 * 
 * Percorro o array utilizando um for loop e verifico se o valor de (i - 1)
 * é igual ao valor de (i + 1), E se o o valor do elemento da iteração atual
 * é diferente de (i - 1), poderia ter verificado também contra (i + 1) 
 */

function countBoomerangs(arr) {
  let count = 0
  for (i = 0; i < arr.length; i++) {
    if (arr[i - 1] === arr[i + 1] && arr[i] !== arr[i - 1]) count++
  }
  return count
}

//------------------------------------------------------------------------------



//Oddish vs. Evenish

/**
 * A função oddishOrEvenish recebe como parametro num<Number> e retorna se a 
 * soma dos dígitos do numero é par ou impar.
 * 
 * Transformo o numero em uma string, e a transformo em um array com o método
 * split passando como argumento uma string vazia, que retorna um array proveniente
 * da string e a separa número a número.
 * 
 * "123".split('') = [1,2,3]
 * 
 * Como o método split retorna um array com os valores, posso encadeiar o método
 * reduce, iterando por todos os itens do array, transformando-os em número com
 * o operador unário '+', que converte um operando em número e assim consigo 
 * fazer a soma dos valores do array.
 * 
 * Caso o resultado da divisão da soma seja exata retorno 'Evenish',
 * caso contrario retorno 'Oddish'
 */

function oddishOrEvenish(num) {
  const sumOfNum = num.toString().split('').reduce((acc, cur) => +acc + +cur, 0)
  return sumOfNum % 2 === 0 ? 'Evenish' : "Oddish"
}

//==============================================================================