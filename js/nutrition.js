// Macro calculator logic
function calculateMacros(weight, unit = "lbs", goal = "maintenance", gender = "male") {
  if (unit === "kg") {
    weight = weight * 2.20462;
  }

  const multipliers = {
    maintenance: { protein: [0.7, 1.0], carbs: [1.5, 2.5], fat: [0.3, 0.5], male: [14, 16], female: [13, 15] },
    muscle_gain: { protein: [1.0, 1.2], carbs: [2.5, 3.5], fat: [0.4, 0.6], male: [16, 18], female: [14, 16] },
    fat_loss: { protein: [1.0, 1.2], carbs: [1.0, 1.5], fat: [0.3, 0.5], male: [12, 14], female: [11, 13] }
  };

  if (!multipliers[goal] || !multipliers[goal][gender]) return null;

  const macro = multipliers[goal];
  const calorieRange = macro[gender];

  const protein = [Math.round(weight * macro.protein[0]), Math.round(weight * macro.protein[1])];
  const carbs = [Math.round(weight * macro.carbs[0]), Math.round(weight * macro.carbs[1])];
  const fat = [Math.round(weight * macro.fat[0]), Math.round(weight * macro.fat[1])];
  const calories = [Math.round(weight * calorieRange[0]), Math.round(weight * calorieRange[1])];

  return {
    protein: `${protein[0]}g - ${protein[1]}g`,
    carbs: `${carbs[0]}g - ${carbs[1]}g`,
    fat: `${fat[0]}g - ${fat[1]}g`,
    calories: `${calories[0]} - ${calories[1]} kcal`
  };
}

// Handle form submission
$(document).ready(function () {
  $('.submit-button').click(function () {
    const weight = parseFloat($('.weight-input').val());
    const unit = $('.weight-unit').val() === '2' ? 'lbs' : 'kg';
    const genderVal = $('.gender-button').val();
    const activityVal = $('.nutrition-button').eq(1).val();
    const goalVal = $('.nutrition-button').eq(2).val();

    const gender = genderVal === '2' ? 'male' : genderVal === '3' ? 'female' : '';
    let goal = '';
    if (goalVal === '2') goal = 'muscle_gain';
    else if (goalVal === '3') goal = 'maintenance';
    else if (goalVal === '4') goal = 'fat_loss';

    if (!weight || !gender || !goal) {
      alert("Please complete all fields.");
      return;
    }

    const result = calculateMacros(weight, unit, goal, gender);

    if (result) {
      $('.nutrition-table td:contains("Fats")').next().html(result.fat);
      $('.nutrition-table td:contains("Calories")').next().html(result.calories);
      $('.nutrition-table td:contains("Protein")').next().html(result.protein);
      $('.nutrition-table td:contains("Carbohydrates")').next().html(result.carbs);
    }
  });
});
