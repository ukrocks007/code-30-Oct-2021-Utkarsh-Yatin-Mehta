var assert = require('assert');
const BMIService = require('../services/BMI');

describe('BMIService', function () {
    describe('Get BMI', function () {
        it('should return correct bmi', function () {
            assert.equal(BMIService.getBMI({
                "Gender": "Male",
                "HeightCm": 171,
                "WeightKg": 96
            }), 32.83061454806607);
        });
    });
    describe('Get BMI Category', function () {
        it('should return correct bmi category', function () {
            assert.equal(BMIService.getBMICategory(32.83061454806607), "Severely obese");
        });
    });
    describe('Get Health Risk', function () {
        it('should return correct helath risk', function () {
            assert.equal(BMIService.getHealthRisk(32.83061454806607), "High risk");
        });
    });
});