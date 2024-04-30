export function mediaponderada(n1,n2,n3,n4,p1=1,p2=1,p3=1,p4=1){

    return  ((p1*n1)+ (p2*n2)+(p3*n3)+(p4*n4))/(p1*1+p2*1+p3*1+p4*1)
}

export function verificamedia(media ,presensa){
    if(presensa>= 0.75 && media >= 7){
    return "Aprovado"
    }
    else{
        return "Reprovado"
    }
}
export function main (n1,n2,n3,n4,presensa,p1=1,p2=1,p3=1,p4=1) {
    let media =mediaponderada (n1,n2,n3,n4,p1,p2,p3,p4)
    let resultado = verificamedia (media,presensa)
    return resultado 
    
}