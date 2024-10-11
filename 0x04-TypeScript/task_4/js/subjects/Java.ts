// Java.ts
// Subjects namespace
namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subjects.Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }
    getAvailableTeacher(teacher: Teacher): string {
      return teacher.experienceTeachingJava > 0 ? `Available Teacher: ${teacher.firstName}` : 'No available teacher';
    }
  }
}
