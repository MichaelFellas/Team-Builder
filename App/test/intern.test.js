const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("getName", () => {
      it("should return the this.name of the object", () => {
       
       const obj = new Intern("Billy Bob Brofresko", 7, "BBB@gmail.com", "University of Bro's");
  
       const string = obj.getName();
  
       expect(string).toEqual("Billy Bob Brofresko")
      });
    });   

    describe("getId", () => {
      it("should return the this.id of the object", () => {
       
       const obj = new Intern("Billy Bob Brofresko", 7, "BBB@gmail.com", "University of Bro's");
  
       const string = obj.getId();
  
       expect(string).toEqual(7)
      });
    });   

    describe("getEmail", () => {
      it("should return the this.email of the object", () => {
       
       const obj = new Intern("Billy Bob Brofresko", 7, "BBB@gmail.com", "University of Bro's");
  
       const string = obj.getEmail();
  
       expect(string).toEqual("BBB@gmail.com")
      });
    });   

    describe("getRole", () => {
      it("should return the role of the object", () => {
       
       const obj = new Intern("Billy Bob Brofresko", 7, "BBB@gmail.com", "University of Bro's");
  
       const string = obj.getRole();
  
       expect(string).toEqual("Intern")
      });
    });   

    describe("getSchool", () => {
      it("should return the this.school of the object", () => {
       
       const obj = new Intern("Billy Bob Brofresko", 7, "BBB@gmail.com", "University of Bro's");
  
       const string = obj.getSchool();
  
       expect(string).toEqual("University of Bro's")
      });
    });   
  
});