import { mediaponderada,verificamedia,main } from "../Be- 1010/mediaPonderada";

describe("Media Pondereda", () => {
    test("caso seja  01", () => {
        let n1 = 8;
        let n2 = 8;
        let n3 = 8;
        let n4 = 8;
        let resultado = mediaponderada(n1, n2, n3, n4);
        expect(resultado).toBe(8);
    });
    test("caso 02", () => {
        let n1 = 6;
        let n2 = 9;
        let n3 = 5;
        let n4 = 5;
        let resultado = mediaponderada(n1, n2, n3, n4);
        expect(resultado).toBe(6.25);
    });
    test("caso 02.5", () => {
        let n1 = 6;
        let n2 = 9;
        let n3 = 5;
        let n4 = 5;
        let p1 = 1;
        let p2 = 2;
        let p3 = 3;
        let p4 = 4;
        let resultado = mediaponderada(n1, n2, n3, n4, p1, p2, p3, p4);
        expect(resultado).toBe(5.9);
    });
    test("caso 02.6", () => {
        let n1 = 6;
        let n2 = 9;
        let n3 = 5;
        let n4 = 5;
        let p1 = "1";
        let p2 = "2";
        let p3 = "3";
        let p4 = "4";
        let resultado = mediaponderada(n1, n2, n3, n4, p1, p2, p3, p4);
        expect(resultado).toBe(5.9);
    });
    test("caso 02.7", () => {
        let n1 = 9;
        let n2 = 9;
        let n3 = 9;
        let n4 = 9;
        let p1 = "1";
        let p2 = "2";
        let p3 = "3";
        let p4 = "4";
        let resultado = mediaponderada(n1, n2, n3, n4, p1, p2, p3, p4);
        expect(resultado).toBe(9);
    });
    test("caso 03", () => {
        let n1 = 8.5;
        let n2 = 8;
        let n3 = 7;
        let n4 = 6.5;
        let resultado = mediaponderada(n1, n2, n3, n4);
        expect(resultado).toBe(7.5);
    });
    test("caso 04", () => {
        let n1 = "7";
        let n2 = "8";
        let n3 = "9";
        let n4 = "10";
        let resultado = mediaponderada(n1, n2, n3, n4);
        expect(resultado).toBe(8.5);
    });
    test("caso 05", () => {
        let n1 = "1";
        let n2 = "1";
        let n3 = "1";
        let n4 = "10";
        let resultado = mediaponderada(n1, n2, n3, n4);
        expect(resultado).toBe(3.25);
    });
});

//describe("verifa valor ", () => {
    test("caso seja  01", () => {
        let n1 = 8;
        let n2 = 8;
        let n3 = 8;
        let n4 = 8;
        let resultado = verificamedia(n1, n2, n3, n4);
        expect(resultado).toBe("Aprovado");
    });
    test("caso 02", () => {
        let n1 = 8;
        let n2 = 8;
        let n3 = 8;
        let n4 = 8;
        let resultado = verificamedia(n1, n2, n3, n4);
        expect(resultado).toBe("Aprovado");
    });
    test("caso 02.5", () => {
        let n1 = 6;
        let n2 = 9;
        let n3 = 5;
        let n4 = 5;
        let p1 = 1;
        let p2 = 2;
        let p3 = 3;
        let p4 = 4;
        let resultado = verificamedia(n1, n2, n3, n4, p1, p2, p3, p4);
        expect(resultado).toBe("Reprovado");
    });
    test("caso 02.6", () => {
        let n1 = 6;
        let n2 = 9;
        let n3 = 5;
        let n4 = 5;
        let p1 = "1";
        let p2 = "2";
        let p3 = "3";
        let p4 = "4";
        let resultado = verificamedia(n1, n2, n3, n4, p1, p2, p3, p4);
        expect(resultado).toBe("Reprovado");
    });
    test("caso 02.7", () => {
        let n1 = 9;
        let n2 = 9;
        let n3 = 9;
        let n4 = 9;
        let p1 = "1";
        let p2 = "2";
        let p3 = "3";
        let p4 = "4";
        let resultado = verificamedia(n1, n2, n3, n4, p1, p2, p3, p4);
        expect(resultado).toBe("Aprovado");
    });
    test("caso 03", () => {
        let n1 = 8.5;
        let n2 = 8;
        let n3 = 7;
        let n4 = 6.5;
        let resultado = verificamedia(n1, n2, n3, n4);
        expect(resultado).toBe("Aprovado");
    });
    test("caso 04", () => {
        let n1 = "7";
        let n2 = "8";
        let n3 = "9";
        let n4 = "10";
        let resultado = verificamedia(n1, n2, n3, n4);
        expect(resultado).toBe("Aprovado");
    });
    test("caso 05", () => {
        let n1 = "1";
        let n2 = "1";
        let n3 = "1";
        let n4 = "10";
        let resultado = verificamedia(n1, n2, n3, n4);
        expect(resultado).toBe("Reprovado");
    });
//});

describe("verifica a media e presenca ", () => {
    test("caso seja  0.75", () => {
        let media = 8
        let presensa = 0.75
        let resultado = verificamedia(media, presensa);
        expect(resultado).toBe("Aprovado");
    });
    test("caso seja  0.90", () => {
        let media = 8
        let presensa = '0.90'
        let resultado = verificamedia(media, presensa);
        expect(resultado).toBe("Aprovado");
    });
    test("caso seja  0.50", () => {
        let media = 8
        let presensa = 0.50
        let resultado = verificamedia(media, presensa);
        expect(resultado).toBe("Reprovado");
    });

    test("caso 01 seja 90", () => {
        let media = 3
        let presensa = 0.90
        let resultado = verificamedia( media , presensa);
        expect(resultado).toBe("Reprovado");
    });
    test("caso 01 seja 75", () => {
        let media = 3
        let presensa = 0.75
        let resultado = verificamedia( media , presensa);
        expect(resultado).toBe("Reprovado");
    });
    test("caso 01 seja 30", () => {
        let media = 3
        let presensa = 0.30
        let resultado = verificamedia( media , presensa);
        expect(resultado).toBe("Reprovado");
    });

    test("caso 02 seja 90", () => {
        let media = 7
        let presensa = 0.90
        let resultado = verificamedia(media , presensa);
        expect(resultado).toBe("Aprovado");
    });
    test("caso 02 seja 0.75", () => {
        let media =7
        let presensa = 0.75
        let resultado = verificamedia(media , presensa);
        expect(resultado).toBe("Aprovado");
    });
    test("caso 02 0.10", () => {
        let media =7 
        let presensa = 0.10
        let resultado = verificamedia(media , presensa);
        expect(resultado).toBe("Reprovado");
    });
})
describe("verifica a função principal ", () => {
    test("caso seja  0.75", () => {
        let n1 = 8;
        let n2 = 8;
        let n3 = 8;
        let n4 = 8;
        let presensa = 0.75
        let resultado = main(n1, n2, n3, n4, presensa);
        expect(resultado).toBe("Aprovado");
    });
    test("caso 01", () => {
        let n1 = 1;
        let n2 = 1;
        let n3 = 1;
        let n4 = 1;
        let presensa = 0.90
        let resultado = main(n1, n2, n3, n4, presensa);
        expect(resultado).toBe("Reprovado");
    });
    test("caso 02", () => {
        let n1 = 8;
        let n2 = 8;
        let n3 = 8;
        let n4 = 8;
        let presensa = 0.60
        let resultado = main(n1, n2, n3, n4, presensa);
        expect(resultado).toBe("Reprovado");
    });
    test("caso 02", () => { // 2*6 + 2*6.5 + 3*7 + 3*8 / 10
        let n1 = 6;
        let n2 = 6.5;
        let n3 = 7;
        let n4 = 8;
        let p1 = 2;
        let p2 = 2;
        let p3 = 3;
        let p4 = 3;
        let presensa = 0.60
        let resultado = main(n1, n2, n3, n4, presensa);
        expect(resultado).toBe("Reprovado");
    });
    test("caso 02", () => { // 2*6 + 2*6.5 + 3*7 + 3*8 / 10
        let n1 = 6;
        let n2 = 6.5;
        let n3 = 7;
        let n4 = 8;
        let p1 = 2;
        let p2 = 2;
        let p3 = 3;
        let p4 = 3;
        let presensa = 0.75
        let resultado = main(n1, n2, n3, n4, presensa , p1,p2,p3,p4);
        expect(resultado).toBe("Aprovado");
    });
})