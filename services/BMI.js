const getBMI = (data) => {
    return (data.WeightKg / Math.pow((data.HeightCm / 100), 2));
}

const getHealthRisk = (bmi) => {
    if (bmi <= 18.4) {
        return "Malnutrition risk"
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Low risk";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Enhanced risk";
    } else if (bmi >= 25 && bmi <= 29.9) {
        return "Medium risk";
    } else if (bmi >= 30 && bmi <= 34.9) {
        return "High risk";
    } else if (bmi >= 40) {
        return "Very high risk";
    }
}

const getBMICategory = (bmi) => {
    if (bmi <= 18.4) {
        return "Underweight"
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Normal weight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Overweight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        return "Moderately obese";
    } else if (bmi >= 30 && bmi <= 34.9) {
        return "Severely obese";
    } else if (bmi >= 40) {
        return "Very severely obese";
    }
}

module.exports = {
    getBMI,
    getHealthRisk,
    getBMICategory
}