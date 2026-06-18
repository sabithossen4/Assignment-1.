function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter(num => num % 2 === 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); 


function reverseString(text: string): string {
    return text.split('').reverse().join('');
}
console.log(reverseString('typescript'));


type StringOrNumber = string | number;
function checkType(value: StringOrNumber): string {
  if (typeof value === "string") {
    return "String";
  } else {
    return "Number";
  }
}
console.log(checkType("Hello"));
console.log(checkType(42));


function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const user = {
  id: 1,
  name: "John Doe",
  age: 21,
};
console.log(getProperty(user, "name"));


interface Book {
  title: string;
  author: string;
  publishedYear: number;
}
function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: true,
  };
}
const myBook: Book = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
}
console.log(toggleReadStatus(myBook));


class Person {
  constructor(public name: string, public age: number) {}
}
class Student extends Person {
  constructor(name: string, age: number, public grade: string) {
    super(name, age);
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}
const student = new Student("Alice", 20, "A");
console.log(student.getDetails());


function getIntersection(arr1: number[], arr2: number[]): number[] {
  return arr1.filter((item) => arr2.includes(item));
}
console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));