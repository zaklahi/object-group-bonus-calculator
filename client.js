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
let ratingBonus = 0;
let totalCompensation= 0;
let totalBonus = 0;
let employeeNumberBonus = 0;


function calculateIndividualEmployeeBonus( employee) {  



  // your logic here
  for (let i=0; i<employees.length; i++) { 
    employee = employees[i];
if (employee.reviewRating <= 2) {
     ratingBonus = 0;
     }
      if (employee.reviewRating === 3) {
     ratingBonus = employee.annualSalary * (.04 )
    }
     if (employee.reviewRating === 4){
      ratingBonus = employee.annualSalary * (.06) 
    }
     if (employee.reviewRating === 5) {
      ratingBonus = employee.annualSalary * (.10)
    }
  if (employee.employeeNumber <= 9999) {
    employeeNumberBonus = employee.annualSalary * (.05)
  }
  else if (employee.annualSalary >= 65000) {
    ratingBonus = annualSalary * (.01)
  }

  return ratingBonus;
}
}

console.log(calculateIndividualEmployeeBonus('Scout', employees))
  
//   // return new object with bonus results

// };
// console.log(calculateIndividualEmployeeBonus('Atticus', employees));

  
//   // return new object with bonus results





