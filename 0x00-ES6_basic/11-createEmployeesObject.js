export default function createEmployeesObject(departmentName, employees) {
  const EmployeeObj = {
    [`${departmentName}`]: [...employees],
  };
  return EmployeeObj;
}
