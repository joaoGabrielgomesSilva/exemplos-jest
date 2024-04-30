import{ main } from "../Be -1010/taref1013.js"


discribe('teste maior ', () => {
    const cenario=[
        {
            lines: ['7 14 106'],
            result:['106 eh maior']
        },
        {
            lines: ['217 14 6'],
            result:['217 eh maior']
        }
    ]
    cenerios.forEach((cenario,i)=>{
        teste('caso #' + i ,()=>{
        let {lines , result} = cenario ;
        let output =  main (lines)

        expect(output).toBe
        (result)
        })
    })
})