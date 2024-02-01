//quiz 01

let hungry = prompt('Are you hungry?');
let money = prompt('Do you have any money?');
let restaurant = prompt('Is the restaurant is open?')//
if (hungry === 'yes'|| money === 'no') {
    console.log('Today de dinner will be at home')
} else if (hungry === 'yes' && restaurant === 'no'){
    console.log('order a delivery!')
} else if (hungry === 'yes' && money === 'yes' && restaurant === 'yes'){
    console.log('today the dinner will be in your favorite restaurant !')
} else {
    console.log('Not sure what to do for dinner. :( ')
}

//quiz 02

let name = prompt('What is your name?')
let age = prompt('How old are you?')
let licence = prompt('Do you have a licence?')
let car = prompt('Do you have a car?')

if (age <= 17 || licence === 'no'){
    console.log(name + ', you cant drive!');

} else if (age >= 18 && licence === 'yes' && car === 'no'){
    console.log(name + ', you can drive, but dont have a car.');

} else if (age >= 18 && licence === 'yes' && car === 'yes'){
    console.log(name + ', today you will be the driver.');
}