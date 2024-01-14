//kelvin is 293 which remains constant
//293 K === 19.85 C === 67.73 F
//kelvin is the standard measure for temperature in science
const kelvin = 293;
//Celsius is 273 degrees less than Kelvin.
let celsius = kelvin - 273;
//calculate farenheit using celsius
let farenheit = celsius*(9/5)+32;
//round off farenheit value
farenheit = Math.floor(farenheit);
console.log(`The temperature is ${farenheit} degrees Fahrenheit`);
