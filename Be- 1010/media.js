

export function verificaMedia(n1,n2,n3,n4){
    let resultMedia = n1/4 + n2/4 +n3/4+n4/4
    console.log(resultMedia)
    
if (resultMedia<7){
        return ("Reprovado")
    }
    else{
        return ("Aprovado")
    }
}
