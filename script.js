function calculateBMI() {
  let weight = document.getElementById("weight").value
  let height = document.getElementById("height").value / 100

  if (weight > 0 && height > 0) {
    let bmi = (weight / (height * height)).toFixed(2)
    let status = ""

    if (bmi < 18.5) status = "Untergewicht"
    else if (bmi < 24.9) status = "Normalgewicht"
    else if (bmi < 29.9) status = "Übergewicht"
    else status = "Fettleibig"

    document.getElementById("result").innerHTML =
      `BMI: <strong>${bmi}</strong> (${status})`
  } else {
    document.getElementById("result").innerHTML =
      "Bitte gültige Werte eingeben!"
  }
}
