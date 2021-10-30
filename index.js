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
        let persons = req.body;
        console.log(persons.length);
        
        // Initial approach sequential processing 
        // res.status(200).json(persons.map(person => updateData(person)));

        //Second approach parallel processing
        Promise.all(persons.map(person => updateData(person))).then(data => res.status(200).json(data));
    } catch (ex) {
        console.log(ex);
        res.status(500).send(ex);
    }
})

app.listen(3000, 'localhost');

console.log(`Started on port 3000`);

function updateData(person) {
    let bmi = BMIService.getBMI(person);
    let bmiCategory = BMIService.getBMICategory(bmi);
    let healthRisk = BMIService.getHealthRisk(bmi);
    person = {
        ...person,
        bmi: bmi,
        bmiCategory: bmiCategory,
        healthRisk: healthRisk
    };
    return person;
}
