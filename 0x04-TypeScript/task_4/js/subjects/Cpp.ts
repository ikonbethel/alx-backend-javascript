// Cpp.ts
// Subjects namespace
namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subjects.Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }
    getAvailableTeacher(teacher: Teacher): string {
      return teacher.experienceTeachingC > 0 ? `Available Teacher: ${teacher.firstName}` : 'No available teacher';
    }
  }
}
