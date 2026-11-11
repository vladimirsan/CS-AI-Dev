const speak = require("./math");


test("happy path - 2, 3", 
    () => {
        expect(speak.sum(2,3)).toBe(5);
    }
);

test("happy path - decimal numbers", 
    () => {
        expect(speak.sum(2.5,3)).toBe(5.5);
    }
);

test("happy path - negative numbers", 
    () => {
        expect(speak.sum(2.5,-2)).toBe(0.5);
    }
);

// making choices
// test("should say hi to Kali", 
//     () => {
//         expect(speak.sum("2","2")).toBe("22");
//     }
// );

// test("should say hi to Kali", 
//     () => {
//         expect(speak.sum()).toBe("22");
//     }
// );
