// 01
const stuMarks = [85, 97, 44, 37, 76, 60];

let totalMarks = 0;
for(let i = 0; i < stuMarks.length; i++){
    totalMarks += stuMarks[i];
}

const avgMarks = totalMarks / stuMarks.length;

console.log(avgMarks);

// 02
const prices = [250, 645, 300, 900, 50];

const discountPrice = prices.map(price => price*0.9);

console.log(discountPrice);

// 03
const companies = ['Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix'];
// a
companies.shift();
console.log(companies);
// b
const indexUber = companies.indexOf('Uber');
companies.splice(indexUber,1,'Ola')
console.log(companies)
// c
companies.push('Amazon')
console.log(companies)