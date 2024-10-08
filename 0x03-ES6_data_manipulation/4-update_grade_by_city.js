export default function updateStudentGradeByCity(studentArray, city, gradeArray) {
  const cityStudents = studentArray.filter((student) => student.location === city);

  const gradedStudents = cityStudents.map((student) => {
    for (const gradeInfo of gradeArray) {
      if (gradeInfo.studentId === student.id) {
        student.grade = gradeInfo.grade; // eslint-disable-line no-param-reassign
      }

      if (student.grade === undefined) {
        student.grade = 'N/A'; // eslint-disable-line no-param-reassign
      }
    }
    return student;
  });

  return gradedStudents;
}
