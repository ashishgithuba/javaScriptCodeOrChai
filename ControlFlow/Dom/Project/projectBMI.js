const form = document.getElementById('bmiForm');
const results = document.getElementById('results');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form refresh

  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);

  if (isNaN(height) || height <= 0) {
    results.innerHTML = 'Please enter a valid height in CM.';
    return;
  }

  if (isNaN(weight) || weight <= 0) {
    results.innerHTML = 'Please enter a valid weight in KG.';
    return;
  }

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  const bmiRounded = bmi.toFixed(2);

  let category = '';
  if (bmi < 18.6) {
    category = 'Underweight';
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    category = 'Normal Range';
  } else {
    category = 'Overweight';
  }

  results.innerHTML = `Your BMI is ${bmiRounded} (${category})`;
});
