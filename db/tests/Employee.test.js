const Employee = require('../lib/Employee');

test("Can use the getName()", () => {
    const name = "Test";
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
});
// getId(), getEmail(), getRole()