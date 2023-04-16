import { repeatWord } from "./repeat_word.js";

describe("positive test suit", () => {
    it('repeat word for 1 and 3 times', () => {
        expect(repeatWord("#n,k/l.", 1)).toBe("#n,k/l.");
        expect(repeatWord("Hello", 3)).toBe("Hello, Hello, Hello");
    });
});

describe("negative test suit", () => {
    it('repeat word for 0 time', () => {
        expect(repeatWord("Hello", 0)).toBe("Error! Please enter not empty string and number > 0");
    }),
    it('repeat numbers for 5 times', () => {
        expect(repeatWord(123, 5)).toBe("Error! Please enter not empty string and number > 0");
    }),
    it('repeat word for -1 time', () => {
        expect(repeatWord("num", -1)).toBe("Error! Please enter not empty string and number > 0");
    })
});

describe("test suit with corner case", () => {
    it('repeat one char for 1 time', () => {
        expect(repeatWord("a", 1)).toBe("a");
    })
});