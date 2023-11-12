interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

const teacher3: Teacher = {
  firstName: 'jhon',
  fullTimeEmployee: false,
  lastName: 'doe',
  location: 'london',
  contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'jhon',
  lastName: 'doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
}

console.log(director1);

interface printTeacherfunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherfunction = function(firstName: string, lastName: string): string{
  return `${firstName[0]}. ${lastName}`;
}

console.log(printTeacher("Jhon", "doe"));

interface StudentConstructor {
  new(firstName: string, lastName: string):  StudentInterface;
}

interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements StudentInterface {
  private firstName: string;
  private lastName: string;
  constructor(firstName: string, lastName: string){
      this.firstName = firstName;
      this.lastName = lastName;
  }
  workOnHomework(): string {
    return 'Currently working';
  }
  displayName(): string {
      return this.firstName;
  }
}
const student = new StudentClass('John', 'Doe');
console.log(student.workOnHomework());
console.log(student.displayName());