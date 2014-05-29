var kawaii = require('../kawaii');

describe('Brian ford', function() {

    it("Should be cute when he's little", function() {
        expect( kawaii('brian ford') ).toBeTruthy();
    });

    it("Should be cute when he's big!", function() {
        expect( kawaii('BRIAN FORD') ).toBeTruthy();
    });
});
