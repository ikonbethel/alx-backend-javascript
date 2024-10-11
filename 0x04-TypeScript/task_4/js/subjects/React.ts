// React.ts
// Subjects namespace
namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subjects.Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }
    getAvailableTeacher(teacher: Teacher): string {
      return teacher.experienceTeachingReact > 0 ? `Available Teacher: ${teacher.firstName}` : 'No available teacher';
    }
  }
}
