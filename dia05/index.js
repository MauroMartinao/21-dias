//Quiz 1
 let num1 = Number(prompt('put the first number'));
 let operation = prompt('whit math operation?');
 let num2 = Number(prompt('put the second number'));
 
 switch (operation) {
     case '+':
         console.log(num1 + num2)
         break;
     case '-':
         console.log(num1 - num2)
         break;
     case '*':
         console.log(num1 * num2)
         break;
     case '/':
         console.log(num1 / num2)
         break;
     default:
         break;
 }

//Quiz 2
let service = prompt('Welcome, please chose a service: gasoline, ethanol, tires');
let gas = 5
let eth = 3
let hgas, heth;

switch (service) {
    case 'gasoline':
        hgas = parseInt(prompt('How much liters of fuel?'));
        console.log('you fuel cost: ' + gas * hgas);
        break;
    case 'ethanol':
        heth = parseInt(prompt('How much liters of fuel?'));
        console.log('you fuel cost: ' + eth * heth);
        break;

    case 'tires':
        console.log('Your tires have been calibrated');
        break;
    default:
        console.log('Invalid service type. Please choose gasoline, ethanol, or tires.');
        break;
}