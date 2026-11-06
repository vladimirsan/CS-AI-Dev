const speak = require("./speak");


test("should say hi to Kali", 
    () => {
        expect(speak.sayHi("Kali")).toBe("Hi Kali");
    }
);

test("should say hi to Vinicio", 
    () => {
        expect(speak.sayHi("Vinicio")).toBe("Hi Vinicio");
    }
);

test("should say hi even with empty spaces", 
    () => {
        expect(speak.sayHi("")).toBe("Hi ");
    }
);
