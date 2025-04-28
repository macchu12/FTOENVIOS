
function avanzarPaso() {
  document.getElementById('paso-1').style.display = 'none';
  document.getElementById('paso-2').style.display = 'block';
  const steps = document.querySelectorAll('.stepper .step');
  steps[0].classList.remove('active');
  steps[0].classList.add('done');
  steps[1].classList.add('active');
}
