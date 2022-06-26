

function oneThroughTwenty() {
  let meuRetorno = []
  for (let counter = 1; counter <= 20; counter++) {
      meuRetorno.push(counter)
  }
  return meuRetorno
}
console.log(oneThroughTwenty())
console.log('Retornar os números de 1 a 20')

//call function oneThroughTwenty

function evensToTwenty() {
  let retorno = []
  for(let i = 1; i <= 20; i++ ){
    if(i % 2 ==0){
      retorno.push(i)
    }
  }
  return retorno        
}
console.log(evensToTwenty())
console.log('Retornar os números pares de 1 a 20. ')

//call function evensToTwenty

function oddsToTwenty() {
  let retorno = []
  for(let i = 1; i <= 20; i++ ){
    if(i % 2 ==1){
      retorno.push(i)
    }
  }
  return retorno   
}
console.log(oddsToTwenty())
console.log(' Retornar os números ímpares de 1 a 20.')
//call function oddsToTwenty

function multiplesOfFive() {
  let retorno = []
  let mult = 0
  while(mult <= 100 - 5){
    mult += 5
    retorno.push(mult)
  }
  return retorno
}
console.log(multiplesOfFive())
console.log(' Retornar os múltiplos de 5 até 100')

//call function multiplesOfFive

function squareNumbers() {
  let retorno = [];
  for (let i = 1; i * i <=100; i +=1){
    retorno.push(i * i)
  }
  return retorno;
}
console.log(squareNumbers())
console.log(' Retornar todos os números até 100 que forem quadrados perfeitos. ')

//call function squareNumbers

function countingBackwards() {
  let retorno = []
  let cont = 21
  while(cont >=1 + 1){
    cont -=1
    retorno.push(cont)
  }
  return retorno
}
console.log(countingBackwards())
console.log('Retornar os números contando de trás para frente de 20 até 1')

//call function countingBackwards

function evenNumbersBackwards() {
  let retorno = []
  for(let i = 20; i >= 1; i--){
    if(i % 2 ==0){
      retorno.push(i)
    }
  }
  return retorno   
}
console.log(evenNumbersBackwards())
console.log('Retornar os números pares de 20 até 1')

//call function evenNumbersBackwards

function oddNumbersBackwards() {
  let retorno = []
  for(let i = 20; i >= 1; i--){
    if(i % 2 ==1){
      retorno.push(i)
    }
  }
  return retorno 
}
console.log(oddNumbersBackwards())
console.log('Retornar os números ímpares de 20 até 1')


//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
  let retorno = []
  let mult = 105
  while(mult >= 5 + 5 ){
    mult -= 5
    retorno.push(mult)
  }
  return retorno
}
console.log(multiplesOfFiveBackwards())
console.log(' Retornar os múltiplos de 5 contando de trás para frente a partir de 100. ')

//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
  let retorno = [];
  for (let i =10 ; i >=1 ; i--){
    let mult= i * i;
    retorno.push(mult)
  }
  return retorno
}  
console.log(squareNumbersBackwards())
console.log(' Retornar os quadrados perfeitos contando de trás para frente a partir de 100')


//call function squareNumbersBackwards
