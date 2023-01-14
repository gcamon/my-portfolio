/*
    Calculate the BMI (Body Mass Index), BMI Category and Health risk 
    for every persons and append the result.
    @params array of objects. List of persons from request.
*/

interface reqData {
  readonly Gender: string
  readonly HeightCm: number
  readonly WeightKg: number
  BMI?: number
  BMICategory?: string
  HealthRisk?: string
}

/*
  Interface fn methods
*/
interface bmiResult {
    (data: reqData[]): reqData[]
}

interface bmiCal {
    (w: number, h: number): number
}

/* fn calculate the BMI value per person
   @params w = weight , h = height
*/
const calculateBMI: bmiCal = (w: number, h: number): number => Math.round((w/(h * h)) * 10) / 10
 

const bodyWeightCheck: bmiResult = (data: reqData[]): reqData[] => {

    try{

        let overWeightCount: number = 0;

        const patientsWeightInfo: reqData[] = data.map((patient: reqData): reqData => {

            const heightToMeter: number = patient.HeightCm / 100

            patient.BMI = calculateBMI(patient.WeightKg,heightToMeter)

            let { BMI, BMICategory, HealthRisk } = patient

            if(BMI <= 18.4 ){
                BMICategory = "Underweight"
                HealthRisk = "Malnutrition risk"

            } else if(BMI >= 18.5 && BMI <= 24.9) {
                BMICategory = "Normal weight"
                HealthRisk = "Low risk"

            } else if(BMI >= 25 && BMI <= 29.9) {
                BMICategory = "Overweight"
                HealthRisk = "Enhanced risk"

            } else if(BMI >= 30 && BMI <= 34.9) {
                BMICategory = "Moderately obese"
                HealthRisk = "Medium risk"

            } else if(BMI >= 35 && BMI <= 39.9) {
                BMICategory = "Severel obese"
                HealthRisk = "High"

            } else if(BMI >= 40) {
                BMICategory = "Very severely obese"
                HealthRisk = "Very high risk"
            }

            (BMI >= 25) && overWeightCount++

            return { BMI, BMICategory, HealthRisk, ...patient }
        })

        /*
            Total number of people overweight with default list of patients for testing = 4
        */

        console.log(`Total number of people with overweight: ${overWeightCount}`)

        return patientsWeightInfo

    } catch(err) {
        return data
    }
    
}

module.exports = bodyWeightCheck 

