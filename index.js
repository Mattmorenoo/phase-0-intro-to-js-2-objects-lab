const employee = { id: 1, name: "John Doe", role: "Engineer" };

function updateEmployeeWithKeyAndValue(employee, key, value) {
  const updatedEmployee = { ...employee };
  updatedEmployee[key] = value;
  return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const clonedEmployee = { ...employee };
  delete clonedEmployee[key];
  return clonedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

describe("updateEmployeeWithKeyAndValue", () => {
  beforeEach(() => {
    // Any setup code you want to run before each test
  });

  it("returns an employee with the original key value pairs and the new key value pair", () => {
    const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "newKey", "newValue");
    // Check the updatedEmployee object to verify the result
    console.log(updatedEmployee);
  });
});