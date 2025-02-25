const pets = ['cat', 'dog', 'bat'];

let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dog') {
        includeInArray = true;
        break;
    }
}

const rta = pets.includes('dog')
console.log('for', includeInArray);
console.log('includes', rta);

function filterByTerm(array, term) {
    // Tu código aquí 👈
    return array.includes(term);
  }
  
const rta4 = filterByTerm(["ana","santi","nico","anastasia"],"ana");
console.log(rta4);