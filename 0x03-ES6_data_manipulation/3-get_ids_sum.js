export default function getStudentIdsSum(objArray) {
  const ids = objArray.map((obj) => obj.id);
  return ids.reduce((accumulator, current) => accumulator + current, 0);
}
