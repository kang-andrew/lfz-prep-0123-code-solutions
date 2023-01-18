const person = {
  firstName: 'Santa',
  lastName: 'Claus',
  hobby: 'Making gifts'
};

console.log(person);

const fullName = person.firstName + ' ' + person['lastName'];

console.log('The person\'s name is: ' + fullName);

person.job = 'Spreading Happiness';

console.log('This person\'s current job is: ' + person.job);

person.previousJob = 'Lawyer';

console.log('The person\'s previous job was: ' + person.previousJob);

console.log(person);
