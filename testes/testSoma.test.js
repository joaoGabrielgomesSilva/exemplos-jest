

    describe(' soma ', () => {
        describe('A soma de dois numeros inteiros devera resultar em um inteiro', () => {
            test('A soma de 3 e 5 deve ser 8 ',() => {
                expect(soma(1,2)).toBe(3)
        })
        
        });
        describe('A soma de dois numeros literais deve dar um inteiro', () => {
            test('A soma de 2 e 2 deve ser 4 ',() => {
                expect(soma('2','2')).toBe(4)
        })
        
        });
        describe('a soma de um inteiro e um literal deve dar um literal ', () => {
            test('A soma de 10 e 2 deve ser 12  ',() => {
                expect(soma(10,'2')).toBe(12)
        })
        
        });
    });
    describe('soma',() =>{
        describe("a soma de duas strings deve exibir uma messagen de erro",() =>{
        })
        test("soma de abc e 2 deve restonar uma messagen de erro ",() =>{
            expect(() => soma('abc','2')).toThrow("Erro em um ou mais parametos com tipos não suportados ")
        })
    })

    


        function soma(a,b){
            
            
            if(isNaN(a) || isNaN(b)){
                throw("Erro em um ou mais parametos com tipos não suportados ")
            }
            return Number(a)+Number(b)
        }
    