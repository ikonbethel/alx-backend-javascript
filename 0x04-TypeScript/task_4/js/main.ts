// main.ts
export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();
export const cTeacher: Subjects.Teacher = {
  firstName: 'Mike',
  lastName: 'James',
  experienceTeachingC: 10,
};

console.log('C++');
cpp.setTeacher = cTeacher;
cpp.getRequirements();
cpp.getAvailableTeacher(cTeacher);

console.log('Java');
java.setTeacher = cTeacher;
java.getRequirements();
java.getAvailableTeacher(cTeacher);

console.log('React');
react.setTeacher = cTeacher;
react.getRequirements();
react.getAvailableTeacher(cTeacher);
