describe('Retornar uma dezena ', ()=>{
    test('caso seja 0 ', () => {
        let dezena = 0 
        let texto = toString(dezena )
        expect (texto ).toBe("zero")
    });

    test('caso seja 1 ', () => {
        let algarismo = 1 
        let texto = toString(algarismo )
        expect (texto ).toBe("um")
    });
    

    test('caso seja 2 ', () => {
        let algarismo = 2
        let texto = toString(algarismo )
        expect (texto ).toBe("dois")
    });
    

    test('caso seja 3 ', () => {
        let algarismo = 3
        let texto = toString(algarismo )
        expect (texto ).toBe("tres")
    });
})
    test('caso seja 4 ', () => {
        let algarismo = 4 
        let texto = toString(algarismo )
        expect (texto ).toBe("quatro")
    });

    test('caso seja 5 ', () => {
        let algarismo = 5 
        let texto = toString(algarismo )
        expect (texto ).toBe("cinco")
    });

    test('caso seja 6 ', () => {
        let algarismo = 6 
        let texto = toString(algarismo )
        expect (texto ).toBe("seis")
    });

    test('caso seja 7 ', () => {
        let algarismo = 7 
        let texto = toString(algarismo )
        expect (texto ).toBe("sete")
    });
    test('caso seja 8 ', () => {
        let algarismo = 8 
        let texto = toString(algarismo )
        expect (texto ).toBe("oito")
    });

    test('caso seja 9 ', () => {
        let algarismo = 9 
        let texto = toString(algarismo )
        expect (texto ).toBe("nove")
    });
