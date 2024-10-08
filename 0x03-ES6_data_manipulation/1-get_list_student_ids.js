export default function getListStudentIds(objArray) {
  return Array.isArray(objArray) ? objArray.map((obj) => obj.id) : [];
}
