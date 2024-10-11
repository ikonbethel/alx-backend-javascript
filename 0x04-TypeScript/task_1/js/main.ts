export interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[index: string]: any;
}

interface Directors extends Teacher {
	numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string): string {
	return `${firstName[0]}. ${lastName}`;
}

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

interface StudentClassInterface {
	workOnHomework(): string;
	displayName(): string;
}

interface StudentClassConstructor {
	new (firstName: string, lastName: string): StudentClassInterface;
}

export class StudentClass implements StudentClassInterface {
	private _firstName!: string;
	private _lastName!: string;
	
	constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
	}

	workOnHomework() {
		return 'Currently working';
	}

	displayName() {
		return this._firstName;
	}
}
