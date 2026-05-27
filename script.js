const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateBtn = document.getElementById('calculate-btn');
const ans = document.getElementById('ans');

function getCategory(bmi) {
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 25)   return 'Normal weight';
  if (bmi < 30)   return 'Overweight';
  return 'Obese';
}

function calculate() {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);

  if (!weight || !height || weight <= 0 || height <= 0) {
    ans.textContent = 'Please enter valid values.';
    ans.style.display = 'block';
    return;
  }

  const heightM = height / 100;
  const bmi = weight / (heightM * heightM);
  const category = getCategory(bmi);

  ans.textContent = `BMI: ${bmi.toFixed(1)} — ${category}`;
  ans.style.display = 'block';
}

calculateBtn.addEventListener('click', calculate);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') calculate();
});