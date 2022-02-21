const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("getName", () => {
      it("should return the this.name of the object", () => {
       
       const obj = new Manager("Monty Theodore", 1, "Bigdyl@gmail.com", 1);
  
       const string = obj.getName();
  
       expect(string).toEqual("Monty Theodore")
      });
    });   

    describe("getId", () => {
      it("should return the this.id of the object", () => {
       
       const obj = new Manager("Monty Theodore", 1, "Bigdyl@gmail.com", 1);
  
       const string = obj.getId();
  
       expect(string).toEqual(1)
      });
    });   

    describe("getEmail", () => {
      it("should return the this.email of the object", () => {
       
       const obj = new Manager("Monty Theodore", 1, "Bigdyl@gmail.com", 1);
  
       const string = obj.getEmail();
  
       expect(string).toEqual("Bigdyl@gmail.com")
      });
    });   

    describe("getRole", () => {
      it("should return the role of the object", () => {
       
       const obj = new Manager("Monty Theodore", 1, "Bigdyl@gmail.com", 1);
  
       const string = obj.getRole();
  
       expect(string).toEqual("Manager")
      });
    });   

    describe("getSchool", () => {
      it("should return the this.officeNumber of the object", () => {
       
       const obj = new Manager("Monty Theodore", 1, "Bigdyl@gmail.com", 1);
  
       const string = obj.getOfficeNumber();
  
       expect(string).toEqual(1)
      });
    });   
  
});