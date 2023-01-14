"use strict";

/* fn calculate the BMI value per patient
   @params w = weight , h = height
*/
const calculateBMI = (w, h) => Math.round((w / (h * h)) * 10) / 10;

/*
    Calculate the BMI (Body Mass Index), BMI Category and Health risk
    for every persons and append the result.
    @params array of objects. List of persons from request.
*/
const bodyWeightCheck = (data) => {
    try {
        let overWeightCount = 0;
        const patientsWeightInfo = data.map((patient) => {
            const heightToMeter = patient.HeightCm / 100;
            patient.BMI = calculateBMI(patient.WeightKg, heightToMeter);
            let { BMI, BMICategory, HealthRisk } = patient;
            if (BMI <= 18.4) {
                BMICategory = "Underweight";
                HealthRisk = "Malnutrition risk";
            }
            else if (BMI >= 18.5 && BMI <= 24.9) {
                BMICategory = "Normal weight";
                HealthRisk = "Low risk";
            }
            else if (BMI >= 25 && BMI <= 29.9) {
                BMICategory = "Overweight";
                HealthRisk = "Enhanced risk";
            }
            else if (BMI >= 30 && BMI <= 34.9) {
                BMICategory = "Moderately obese";
                HealthRisk = "Medium risk";
            }
            else if (BMI >= 35 && BMI <= 39.9) {
                BMICategory = "Severel obese";
                HealthRisk = "High";
            }
            else if (BMI >= 40) {
                BMICategory = "Very severely obese";
                HealthRisk = "Very high risk";
            }
            (BMI >= 25) && overWeightCount++;
            return Object.assign({ BMI, BMICategory, HealthRisk }, patient);
        });
        /*
            Total number of people overweight with default list of patients for testing = 4
        */
        console.log(`Total number of people with overweight: ${overWeightCount}`);
        return patientsWeightInfo;
    }
    catch (err) {
        return data;
    }
};
module.exports = bodyWeightCheck;
