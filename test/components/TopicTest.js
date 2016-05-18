const chai = require("chai");

chai.should();

describe("truth", () => {
    it("is OK", () => {
        const truth = true;
        truth.should.be.ok;
    });
});
