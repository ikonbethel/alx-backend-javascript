export default function getStudentsByLocation(objArray, city) {
  return objArray.filter((obj) => obj.location === city);
}
