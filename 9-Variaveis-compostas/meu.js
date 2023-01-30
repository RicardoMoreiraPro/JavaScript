var vet = []
var c = 0
var s =0
while(c<=5){
    vet[c] = s  
    if(vet[c] % 2 == 0){
        s+=3
    }else{
        s+=5
    }
    c++    
}
console.log(vet)
vet.push(3)
console.log(vet)
