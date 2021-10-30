const express = require('express');
const app = express();
const cors = require('cors');
var morgan = require('morgan');
const BMIService = require('./services/BMI');
app.use(express.json({
    limit: '1000mb'
}))

app.use(express.urlencoded({
    extended: false
}))

app.use(cors({
    exposedHeaders: ["Link"]
}));

app.use(morgan('tiny'));

app.post('/', async (req, res) => {
    try {
        let peoples = req.body;
        console.log(peoples.length);
        for (let i = 0; i < peoples.length; i++) {
            let bmi = BMIService.getBMI(peoples[i]);
            let bmiCategory = BMIService.getBMICategory(bmi);
            let healthRisk = BMIService.getHealthRisk(bmi);
            peoples[i] = {
                ...peoples[i],
                bmi: bmi,
                bmiCategory: bmiCategory,
                healthRisk: healthRisk
            }
        }
        res.status(200).json(peoples);
    } catch (ex) {
        console.log(ex);
        res.status(500).send(ex);
    }
})

app.listen(3000, 'localhost');

console.log(`Started on port 3000`);