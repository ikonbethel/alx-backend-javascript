export default function createReportObject(employeesList) {
  const report = {
    allEmployees: employeesList,
    getNumberOfDepartments(list) {
      return Object.keys(list).length;
    },
  };

  return report;
}
