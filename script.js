
function toggle(id) {
  const section = document.getElementById(id);
  if (!section) return;
  section.style.display = section.style.display === 'block' ? 'none' : 'block';
}


const currentSteps = {
  choco: -1,
  biryani: -1,
  ice: -1,
  pizza: -1,
  shake: -1
};

function startCooking(recipeId) {
  const stepList = document.getElementById(`${recipeId}-step-list`);
  const steps = stepList.getElementsByTagName('li');
  const progress = document.getElementById(`${recipeId}-progress`);

 
  Array.from(steps).forEach(step => step.style.fontWeight = 'normal');

  currentSteps[recipeId] = 0;


  steps[0].style.fontWeight = 'bold';
  progress.style.width = `${100 / steps.length}%`;
}

function nextStep(recipeId) {
  const stepList = document.getElementById(`${recipeId}-step-list`);
  const steps = stepList.getElementsByTagName('li');
  const progress = document.getElementById(`${recipeId}-progress`);

  if (currentSteps[recipeId] === -1) {
    alert("Click 'Start Cooking' first!");
    return;
  }


  if (currentSteps[recipeId] < steps.length) {
    steps[currentSteps[recipeId]].style.fontWeight = 'normal';
  }

  currentSteps[recipeId]++;

  if (currentSteps[recipeId] < steps.length) {
    steps[currentSteps[recipeId]].style.fontWeight = 'bold';
    const progressPercent = ((currentSteps[recipeId] + 1) / steps.length) * 100;
    progress.style.width = `${progressPercent}%`;
  } else {
    alert("All steps completed!");
    currentSteps[recipeId] = -1;
    progress.style.width = '0%';
  }
}

window.onbeforeprint = () => {
  document.querySelectorAll('.section').forEach(section => {
    section.style.display = 'block';
  });
};

