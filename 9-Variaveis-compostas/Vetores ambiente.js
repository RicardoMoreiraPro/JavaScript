var num = [5,8,2,9,3]
console.log(`Nosso vetor é o ${num}`)
num[5] = 7    //coloque o valor 7 na posição 5
console.log(`Nosso vetor é o ${num}`)
num.push(9)  //coloque o valor 9 na ultima posição
console.log(`Nosso vetor é o ${num}`)
console.log(num[4]) //mostrar o num na posião 4
console.log(num.length) //para saber o tamanho do vetor
console.log(num.sort()) //coloca os elementos em ordem crescente
console.log(num.indexOf(5)) //diz a posição do valor 5. Se o valor procurado nao existe irá aparecer -1

/*for(let pos=0; pos<num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
ou */
for(let pos in num){    //Para cada posiçao em num
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

