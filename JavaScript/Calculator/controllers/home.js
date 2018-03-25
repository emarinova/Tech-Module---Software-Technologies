const Calculator = require('../models/Calculator');

module.exports = {
    indexGet: (req, res) => {
        res.render('../views/home/index');
    },
    indexPost: (req, res) => {
        let calculatorBody = req.body;
        let calculatorParams = calculatorBody['calculator'];
        let calculator = new Calculator();

        calculator.leftOperand = Number(calculatorParams.leftOperand);
        calculator.operator = calculatorParams.operator;
        calculator.rightOperand = Number(calculatorParams.rightOperand);

        let result = calculator.calculateResult();

        res.render('../views/home/index', {'calculator': calculator, 'result': result});
    }
};