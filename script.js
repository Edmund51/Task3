/* ------------------------------ TASK 3 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      return 'Cannot divide by zero';
    }
    return a / b;
  }
  
  const number1 = 348;
  const number2 = 3;
  
  console.log(`Sum: ${add(number1, number2)}`);
  console.log(`Subtraction: ${subtract(number1, number2)}`);
  console.log(`Multiplication: ${multiply(number1, number2)}`);
  console.log(`Division: ${divide(number1, number2)}`);