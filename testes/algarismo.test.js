import{toString} from "../Be- 1010/algarismo"


describe('Trasfome um algoritimo  em um texto ', ()=>{
    test('caso seja 0 ', () => {
        let algarismo = 0 
        let texto = toString(algarismo )
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
    test('caso seja string', () => {
        let algarismo = "ABC"
        let texto = toString(algarismo )
        expect (texto).toBe("ABC não é um algarismo.")
    });
    test('caso seja string ', () => {
        let algarismo = "uyr4wefiy4iwygf34illg4"
        let texto = toString(algarismo )
        expect (texto).toBe("uyr4wefiy4iwygf34illg4 não é um algarismo.")
    });
    test('caso seja string ', () => {
        let algarismo = "KLHSDLKSDFHKHLASH"
        let texto = toString(algarismo )
        expect (texto).toBe("KLHSDLKSDFHKHLASH não é um algarismo.")
    });
    test('caso seja string ', () => {
        let algarismo = "xyz"
        let texto = toString(algarismo )
        expect (texto).toBe("xyz não é um algarismo.")
    });
    test('caso seja 11', () => {
        let algarismo = 11
        let texto = toString(algarismo )
        expect (texto).toBe("11 não é um algarismo aceito.")
    });
    test('caso seja 50', () => {
        let algarismo = 50
        let texto = toString(algarismo )
        expect (texto).toBe("50 não é um algarismo aceito.")
    });
    test.skip('caso seja 1', () => {
        let algarismo = '1'
        let texto = toString(algarismo )
        expect (texto).toBe("um")
    });
    test('caso seja -10', () => {
        let algarismo = -10
        let texto = toString(algarismo )
        expect (texto).toBe("-10 não é um algarismo aceito.")
    });
    test('caso seja true', () => {
        let algarismo = true
        let texto = toString(algarismo )
        expect (texto).toBe("true não é um algarismo.")
    });
    test('caso seja false', () => {
        let algarismo = false
        let texto = toString(algarismo )
        expect (texto).toBe("false não é um algarismo.")
    });
});