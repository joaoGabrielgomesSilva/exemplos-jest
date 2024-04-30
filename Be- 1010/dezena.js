function dezena(toString(n) =>){
    if (typeof n== 'boolean' ||isNaN(n) ||n < 0 ||n >9 )
    return ${n} "nao é uma dezena"

    const n = [ " " , "dez" ,"vinte" , "trinta" , "quarenta" , "cinquenta" , " sesenta", "setenta" , "oitenta", "noventa" ]
    return n
}