var application = require('../application');

describe("UserController", function(){
    var userController = new application.UserController();
    it("if user is saved", function(done){
        expect(true).toBe(userController.save("sergio", 30));
        done();
    });
});

describe("UserController", function(){
    var userController = new application.UserController();
    it("if server returns a list of one value", function(done){
        expect(1).toBe(userController.list().length);
        done();
    });
});