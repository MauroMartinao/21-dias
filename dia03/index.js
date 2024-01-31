// Quiz

let name = prompt('enter your name');
let age = prompt('enter your age');
let height = prompt('enter yout height');
let weight = prompt('enter yout weight');
let yearBorn = (2024 - age);
let imc = weight/(height * height);

console.log(
    'Hello ' + name + ', you are ' + age + ' years old,\n' +
    'were born in ' + yearBorn + ', have ' + height + ' cm,\n' +
    'and you weigh ' + weight + ' kg.\nSo your IMC is ' + imc
);  