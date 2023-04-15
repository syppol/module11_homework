import { revertString } from "./reverse_string";

xdescribe("positive test suit", () => {
    it('reverse "Hello" string', () => {
        expect(revertString("Hello")).toBe("olleH");
    })
});