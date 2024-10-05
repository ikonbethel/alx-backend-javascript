export default function createIteratorObject(report) {
  const result = [];
  for (const employees of Object.values(report.allEmployees)) {
    result.push(...Array.from(employees));
    // console.log(employee);
  }

  return result;
}
