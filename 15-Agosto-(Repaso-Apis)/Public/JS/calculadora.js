window.onload = function () {
  startCalculator();
};

function startCalculator() {
  const num1 = parseFloat(prompt("Ingresa el primer número:"));
  const num2 = parseFloat(prompt("Ingresa el segundo número:"));
  const operation = prompt(
    "Ingresa la operación que deseas realizar (+, -, *, /):"
  );

  if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, ingresa números válidos.");
    return;
  }

  let result;
  switch (operation) {
    case "+":
      result = sumar(num1, num2);
      break;
    case "-":
      result = restar(num1, num2);
      break;
    case "*":
      result = multiplicar(num1, num2);
      break;
    case "/":
      if (num2 === 0) {
        alert("Error: No se puede dividir por cero.");
        return;
      }
      result = dividir(num1, num2);
      break;
    default:
      alert("Operación no válida. Por favor, ingresa una operación válida.");
      return;
  }

  alert(`El resultado de ${num1} ${operation} ${num2} es: ${result}`);
}

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}