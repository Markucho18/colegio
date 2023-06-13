let nums = [2, 10, 3, 1, 7, 9];

//MULTIPLICAR NUMEROS
const doble = nums.map(numero => numero * 2);
console.log(doble);

//SUMAR TODOS LOS NUMEROS
const sumaTotal = nums.reduce((acumulador, numero) => acumulador + numero, 0)
console.log(sumaTotal)

//ORDENAR DE MENOR A MAYOR
const ordenados = nums.sort((a, b)=> a - b);
console.log(ordenados);

//FILTRAR MAYORES A 5
const mayorQueCinco = nums.filter(numero => numero > 5);
console.log(mayorQueCinco);
