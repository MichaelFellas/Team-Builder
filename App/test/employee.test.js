const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("getName", () => {
    it("should return the this.name of the object", () => {
     
     const obj = new Employee("Emp loyee", 4, "employee@gmail.com");

     const string = obj.getName();

     expect(string).toEqual("Emp loyee")
    });
  });   

  describe("getId", () => {
    it("should return the this.id of the object", () => {
     
     const obj = new Employee("Emp loyee", 4, "employee@gmail.com");

     const string = obj.getId();

     expect(string).toEqual(4)
    });
  });   

  describe("getEmail", () => {
    it("should return the this.email of the object", () => {
     
     const obj = new Employee("Emp loyee", 4, "employee@gmail.com");

     const string = obj.getEmail();

     expect(string).toEqual("employee@gmail.com")
    });
  });   

  describe("getRole", () => {
    it("should return the role of the object", () => {
     
     const obj = new Employee("Emp loyee", 4, "employee@gmail.com");

     const string = obj.getRole();

     expect(string).toEqual("Employee")
    });
  });   
}); 