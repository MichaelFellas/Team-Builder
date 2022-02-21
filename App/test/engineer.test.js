const Engineer = require("../lib/engineer");//require Engineer

describe("Engineer", () => {
    describe("getName", () => {
      it("should return the this.name of the object", () => {
       
       const obj = new Engineer("Grace Test", 3, "GraceTest@gmail.com", "github.com/Testaccount");
  
       const string = obj.getName();
  
       expect(string).toEqual("Grace Test")
      });
    });   

    describe("getId", () => {
      it("should return the this.id of the object", () => {
       
       const obj = new Engineer("Grace Test", 3, "GraceTest@gmail.com", "github.com/Testaccount");
  
       const string = obj.getId();
  
       expect(string).toEqual(3)
      });
    });   

    describe("getEmail", () => {
      it("should return the this.email of the object", () => {
       
       const obj = new Engineer("Grace Test", 3, "GraceTest@gmail.com", "github.com/Testaccount");
  
       const string = obj.getEmail();
  
       expect(string).toEqual("GraceTest@gmail.com")
      });
    });   

    describe("getRole", () => {
      it("should return the role of the object", () => {
       
       const obj = new Engineer("Grace Test", 3, "GraceTest@gmail.com", "github.com/Testaccount");
  
       const string = obj.getRole();
  
       expect(string).toEqual("Engineer")
      });
    });   

    describe("getGithub", () => {
      it("should return the this.github of the object", () => {
       
       const obj = new Engineer("Grace Test", 3, "GraceTest@gmail.com", "github.com/Testaccount");
  
       const string = obj.getGithub();
  
       expect(string).toEqual("github.com/Testaccount")
      });
    });   
  
});
