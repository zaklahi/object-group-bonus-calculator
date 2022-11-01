// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//
// employees.bonusPercentage = 0;
// let bonusPercentage = 0;

// let employee = employees.name;

// console.log(employees);

function calculateIndividualEmployeeBonus( employee ) {  
let bonusPercentage = 0;
employees.bonusPercentage = 0;
// let employee = employees.name;
  // your logic here
  for (i=0; i<employees.length; i++) {
    if (employees.reviewRating <= 2) {
     bonusPercentage = employees.annualSalary * (0.00);
     }
    else if (employees.reviewRating === 3) {
      return bonusPercentage = employees.annualSalary * (.04 )}
    }
  //   if (employees.reviewRating = 4) {
  //     return employees.bonusPercentage * .06}
  //   if (employees.reviewRating = 5) {
  //     return employees.bonusPercentage * .1}
  // } 


  console.log(employees.bonusPercentage);
  // return new object with bonus results

};
console.log(calculateIndividualEmployeeBonus('Atticus'));

  
  // return new object with bonus results