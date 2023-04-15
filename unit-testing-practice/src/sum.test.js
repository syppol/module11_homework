const sum = require('./sum.js');


xdescribe("test sum", () => {
    it('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    }),
    it('adds 2 + 2 to equal 4', () => {
        expect(sum(2, 2)).toBe(4);
    }),
    xit('adds 3 + 2 to equal 5', () => {
        expect(sum(3, 2)).toBe(5);
    })
})