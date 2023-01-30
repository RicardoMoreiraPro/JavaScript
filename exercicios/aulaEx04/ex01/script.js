function contar(){
    var i1 = document.querySelector('input#inicio')
    var i2 = document.querySelector('input#fim')
    var i3 = document.querySelector('input#passo')
    var res = document.querySelector('div#res')
    var inicio = Number(i1.value)
    var fim = Number(i2.value)
    var passo = Number(i3.value)
    if (i1.value.length==0 || i2.value.length==0){
        res.innerHTML=('Impossivel contar')
        //window.alert('[ERRO] Faltam dados!')
    }else{
        res.innerHTML = 'Contando: </br>'
        if(passo <= 0){
            window.alert('Passo invalido! Considerando passo 1')
            passo = 1
        }
        c=inicio
        if(fim>inicio){
            while (c<=fim ){
                res.innerHTML += ` ${c}\u{1f449}`
                c+= passo
        }
        }else{
            while (c>=fim ){
                res.innerHTML += ` ${c}\u{1f449}`
                c-= passo
        }
        }
    
        res.innerHTML+=`\u{1F3C1}`
    }
    
}
