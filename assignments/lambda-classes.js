// CODE here for your Lambda Classes

//   #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

class Person {
    constructor (attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
};

// / #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructors extends Person {
    constructor(attr) {
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
};

//   #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

class Student extends Person {
    constructor(attr) {
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
    }
    listsSubjects() {
        return this.favSubjects;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
};

//   #### Project Manager

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following unique props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class ProjectManagers extends Instructors {
    constructor(attr) {
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standup(channel) {
        return `${this.name} announces to ${channel}, @${channel} standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
};
//Student
const jeff = new Student({
    name: 'Jeff',
    age: 29,
    location: 'Orange County, California',
    previousBackground: 'Management',
    className: 'Full-Stack Web-Dev',
    favSubjects: ['math', 'science', 'music']
});

const kyle = new Student({
    name: 'Kyle',
    age: 29,
    location: 'Bakersfield, California',
    previousBackground: 'Civil Engineering',
    className: 'Full-Stack Web-Dev',
    favSubjects: ['math', 'science', 'music']
});

const michael = new Student({
    name: 'Michael',
    age: 28,
    location: 'Los Angeles, California',
    previousBackground: 'Account Manager',
    className: 'Full-Stack Web-Dev',
    favSubjects: ['theater', 'music', 'philosophy']
});


//ProjectManagers
const nestor = new ProjectManagers({
    name: 'Nestor',
    age: 28,
    location: 'San Diego, California',
    specialty: 'Troubleshooting',
    favLanguage: 'Spanish',
    catchPhrase: 'Dude....',
    gradClassName: '???',
    favInstructor: 'Kobe Bryant'
})

const gabe = new ProjectManagers({
    name: 'Gabe',
    age: 27,
    location: 'Orange County, California',
    specialty: 'Admin',
    favLanguage: 'Vietnamese',
    catchPhrase: 'Thats right, B-Beee',
    gradClassName: 'MBA',
    favInstructor: 'Adam Morrison'
})

//Logging classes
console.log(Person);
console.log(Instructors);
console.log(Student);
console.log(ProjectManagers);

//logging Person methods
console.log(jeff);
console.log(jeff.speak());

//logging Student methods
console.log(kyle.listsSubjects());
console.log(jeff.PRAssignment('CSS II'));
console.log(michael.sprintChallenge('Adv CSS'));

//logging Instructors methods
console.log(nestor);
console.log(nestor.speak());
console.log(gabe.demo('if-else statements'));
console.log(nestor.grade(kyle, 'HTML symantics'));

//logging ProjectManagers methods
console.log(nestor.standup('The Homies'));
console.log(gabe.debugsCode(michael, 'dogs'));



//   #### Stretch Problem

// * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// * Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
// * Add a graduate method to a student.
//   * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
//   * If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.


