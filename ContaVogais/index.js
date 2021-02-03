let numeroDeVogais = 0
function contaVogais(frases){
    for (let i = 0; i < frases.length; i++) {
        const Letras =  frases[i].toLowerCase();
        if(Letras == 'a' || Letras == 'e' || Letras== 'i'|| Letras== 'o'|| Letras== 'u'){
        numeroDeVogais++
            console.log(Letras.toLowerCase())
        }
    
    }
console.log(numeroDeVogais)

}
contaVogais('rafael Cassiano de souza')